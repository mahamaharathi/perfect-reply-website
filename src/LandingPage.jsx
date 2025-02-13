import React from 'react';
import { MessageSquare, Shield, Zap, Clock, Users, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
            {/* Hero Section */}
            <header className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                    Perfect Reply
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-4">
                    Your AI-powered assistant for professional Slack and Microsoft Teams communications
                </p>
                <p className="text-lg text-gray-500 mb-8">
                    Designed specifically for business teams to maintain consistent, professional communication across all hierarchical levels
                </p>
                <div className="flex justify-center gap-4">
                    <a
                        href="#"
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
                    >
                        Add to Chrome
                    </a>
                    <a
                        href="#features"
                        className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all"
                    >
                        Learn More
                    </a>
                </div>
            </header>

            {/* Demo Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
                    <img
                        src="./screenshot.svg"
                        alt="Perfect Reply Demo"
                        className="w-full rounded-lg shadow-md"
                    />
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">Why Perfect Reply?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
                            title: "Smart Suggestions",
                            description: "Get context-aware message suggestions tailored to your workplace hierarchy"
                        },
                        {
                            icon: <Shield className="w-6 h-6 text-blue-600" />,
                            title: "Privacy First",
                            description: "Your data stays on your device. No data collection, no tracking."
                        },
                        {
                            icon: <Zap className="w-6 h-6 text-blue-600" />,
                            title: "Instant Results",
                            description: "Generate professional replies in seconds, not minutes"
                        },
                        {
                            icon: <Clock className="w-6 h-6 text-blue-600" />,
                            title: "Save Time",
                            description: "Focus on what matters while we handle the communication details"
                        },
                        {
                            icon: <Users className="w-6 h-6 text-blue-600" />,
                            title: "Multiple Audiences",
                            description: "Adjust tone for peers, managers, or executives with one click"
                        },
                        {
                            icon: <Lock className="w-6 h-6 text-blue-600" />,
                            title: "Self Hosted",
                            description: "Complete control over your data with self-hosted infrastructure"
                        }
                    ].map((feature, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                {feature.icon}
                                <h3 className="text-xl font-semibold">{feature.title}</h3>
                            </div>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Platform Integration Section */}
            <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Seamless Integration with Your Workflow</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <img src="./slack-mock.svg" alt="Slack Integration" className="mb-4 rounded" />
                            <h3 className="text-xl font-semibold mb-2">Slack Integration</h3>
                            <p className="text-gray-600">Perfect your team communications, channel messages, and direct responses in Slack with just one click.</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <img src="./teams-mock.svg" alt="Teams Integration" className="mb-4 rounded" />
                            <h3 className="text-xl font-semibold mb-2">Microsoft Teams Integration</h3>
                            <p className="text-gray-600">Maintain professional communication in Microsoft Teams for all your business conversations.</p>
                        </div>
                    </div>
                    <div className="mt-8 bg-blue-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Perfect for Business Teams</h3>
                        <ul className="grid md:grid-cols-2 gap-4">
                            <li className="flex items-center gap-2">
                                <span className="text-blue-600">✓</span>
                                <span>Team-wide consistent communication</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-blue-600">✓</span>
                                <span>Context-aware responses</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-blue-600">✓</span>
                                <span>Hierarchy-appropriate messaging</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-blue-600">✓</span>
                                <span>Professional tone maintenance</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Installation Section */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">Get Started in Minutes</h2>
                <div className="max-w-2xl mx-auto space-y-8">
                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <ol className="space-y-4">
                            <li className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">1</span>
                                <div>
                                    <h4 className="font-semibold">Add to Chrome</h4>
                                    <p className="text-gray-600">Click the "Add to Chrome" button above</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">2</span>
                                <div>
                                    <h4 className="font-semibold">Create Account</h4>
                                    <p className="text-gray-600">Sign up with your email (or use the 60-day free trial)</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">3</span>
                                <div>
                                    <h4 className="font-semibold">Start Writing Better Messages</h4>
                                    <p className="text-gray-600">Click the extension icon whenever you need help crafting the perfect reply</p>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>

            {/* Privacy Section */}
            <section className="container mx-auto px-4 py-16 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Privacy First, Always</h2>
                    <div className="prose prose-blue mx-auto">
                        <p className="text-lg text-gray-600 mb-6">
                            Perfect Reply is built with privacy at its core. We believe your communications should remain private and secure.
                        </p>
                        <ul className="space-y-4 text-gray-600">
                            <li>✓ No data collection or tracking</li>
                            <li>✓ All processing happens locally on your device</li>
                            <li>✓ Self-hosted infrastructure for complete control</li>
                            <li>✓ Open source and transparent</li>
                            <li>✓ No third-party dependencies</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-50 py-8">
                <div className="container mx-auto px-4 text-center text-gray-600">
                    <p>© {new Date().getFullYear()} Perfect Reply. All rights reserved.</p>
                    <div className="mt-4 space-x-4">
                        <Link to="/privacy" className="hover:text-blue-600">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-blue-600">Terms of Service</Link>
                        <Link to="/refund" className="hover:text-blue-600">Refund Policy</Link>
                        <a href="https://github.com/yourusername/perfect-reply" className="hover:text-blue-600">GitHub</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;