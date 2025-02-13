import React from 'react';
import { Link } from 'react-router-dom';

const PolicyPage = ({ title, content }) => {
  // Simple function to convert markdown to HTML
  const convertMarkdownToHtml = (text) => {
    return text
      // Convert headers
      .replace(/^# (.*$)/gm, '<h1 class="text-4xl font-bold mb-6">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold mt-8 mb-4">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>')
      // Convert lists
      .replace(/^\- (.*$)/gm, '<li class="ml-4">• $1</li>')
      // Convert paragraphs
      .split('\n').map(line => {
        if (line && !line.startsWith('<')) {
          return `<p class="mb-4">${line}</p>`;
        }
        return line;
      }).join('\n');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <Link to="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
          ← Back to Home
        </Link>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-blue max-w-none">
            <div
              dangerouslySetInnerHTML={{
                __html: convertMarkdownToHtml(content)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;