import React, { useState, useEffect } from 'react';
import { Mail, Lock, ArrowLeft, Shield } from 'lucide-react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASEURL
const supabaseAnonKey = process.env.SUPABASEANONKEY
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const ResetPassword = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [mode, setMode] = useState('reset'); // 'reset' or 'request'
    const [email, setEmail] = useState('');
    const [requestSuccess, setRequestSuccess] = useState(false);

    // Check if we have a token in the URL (for reset password flow)
    useEffect(() => {
        const token = searchParams.get('token');
        if (!token) {
            setMode('request');
        }
    }, [searchParams]);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        setIsLoading(true);

        try {
            const { error } = await supabase.auth.updateUser({ password });

            if (error) throw error;

            setSuccess(true);
            setTimeout(() => {
                window.open('chrome-extension://hchdkmjdgiokmdnebjdjmhpjjnmipkmm/popup.html', '_blank');
            }, 3000);
        } catch (err) {
            console.error('Reset error:', err);
            setError(err.message || 'Failed to reset password');
        } finally {
            setIsLoading(false);
        }
    };

    const handleRequestReset = async (e) => {
        e.preventDefault();
        setError('');

        if (!email) {
            setError('Please enter your email address');
            return;
        }

        setIsLoading(true);

        try {
            // Update the redirectTo URL to point to your GitHub Pages URL 
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: 'https://mahamaharathi.github.io/perfect-reply/reset-password'
            });

            if (error) throw error;

            setRequestSuccess(true);
        } catch (err) {
            console.error('Request reset error:', err);
            setError(err.message || 'Failed to send reset email');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
                <Link to="/" className="inline-flex items-center text-blue-600 mb-6 hover:text-blue-700">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to home
                </Link>

                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                    {mode === 'reset' ? 'Reset Your Password' : 'Forgot Password'}
                </h1>

                {mode === 'reset' ? (
                    <>
                        {success ? (
                            <div className="text-center">
                                <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
                                <h2 className="text-xl font-semibold mb-2">Password Updated!</h2>
                                <p className="text-gray-600 mb-6">
                                    Your password has been successfully reset. You'll be redirected to the extension shortly.
                                </p>
                                <p className="text-sm text-gray-500">
                                    If you're not redirected automatically, please open your Chrome extension manually.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleResetPassword} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full p-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Enter new password"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                                        <input
                                            type="password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            className="w-full p-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Confirm new password"
                                            required
                                        />
                                    </div>
                                </div>

                                {error && (
                                    <div className="text-red-500 text-sm bg-red-50 p-2 rounded">
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? 'Updating...' : 'Reset Password'}
                                </button>
                            </form>
                        )}
                    </>
                ) : (
                    <>
                        {requestSuccess ? (
                            <div className="text-center">
                                <Mail className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                                <h2 className="text-xl font-semibold mb-2">Check Your Email</h2>
                                <p className="text-gray-600 mb-2">
                                    We've sent a password reset link to:
                                </p>
                                <p className="font-medium text-lg mb-6">{email}</p>
                                <p className="text-sm text-gray-500">
                                    Click the link in the email to reset your password. If you don't see it, please check your spam folder.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleRequestReset} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full p-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                </div>

                                {error && (
                                    <div className="text-red-500 text-sm bg-red-50 p-2 rounded">
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? 'Sending...' : 'Send Reset Link'}
                                </button>
                            </form>
                        )}
                    </>
                )}

                <div className="mt-6 text-center text-sm text-gray-600">
                    {mode === 'reset' ? (
                        <p>
                            Remember your password?{' '}
                            <a
                                href="chrome-extension://extension-id-here/popup.html"
                                className="text-blue-600 hover:text-blue-700"
                            >
                                Return to extension
                            </a>
                        </p>
                    ) : (
                        <p>
                            Remember your password?{' '}
                            <a
                                href="chrome-extension://extension-id-here/popup.html"
                                className="text-blue-600 hover:text-blue-700"
                            >
                                Log in
                            </a>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;