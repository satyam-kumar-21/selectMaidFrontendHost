import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Header */}
      <header className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Company Name */}
          <Link to="/" className="font-semibold text-lg text-red-500">
            Select Maid
          </Link>
          {/* Navigation */}
          <nav>
            <Link to="/" className="text-white hover:text-gray-400 ml-4">
              Return to Home
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
        <div className="prose dark:prose-dark">
          <h2>Introduction</h2>
          <p>
            This Privacy Policy governs the manner in which Select Maid collects,
            uses, maintains, and discloses information collected from users (each,
            a "User") of the selectmaid.in website ("Site"). This privacy policy
            applies to the Site and all products and services offered by Select
            Maid.
          </p>
          <h2>Personal identification information</h2>
          <p>
            We may collect personal identification information from Users in a
            variety of ways, including, but not limited to, when Users visit our
            site, register on the site, place an order, subscribe to the
            newsletter, respond to a survey, fill out a form, and in connection
            with other activities, services, features or resources we make
            available on our Site.
          </p>
          <h2>Non-personal identification information</h2>
          <p>
            We may collect non-personal identification information about Users
            whenever they interact with our Site. Non-personal identification
            information may include the browser name, the type of computer and
            technical information about Users means of connection to our Site, such
            as the operating system and the Internet service providers utilized
            and other similar information.
          </p>
          <h2>Web browser cookies</h2>
          <p>
            Our Site may use "cookies" to enhance User experience. User's web
            browser places cookies on their hard drive for record-keeping purposes
            and sometimes to track information about them. User may choose to set
            their web browser to refuse cookies, or to alert you when cookies are
            being sent. If they do so, note that some parts of the Site may not
            function properly.
          </p>
          <h2>How we use collected information</h2>
          <p>
            Select Maid may collect and use Users personal information for the
            following purposes:
          </p>
          <ul>
            <li>To improve customer service</li>
            <li>To personalize user experience</li>
            <li>To improve our Site</li>
            <li>To process payments</li>
            <li>To send periodic emails</li>
          </ul>
          <h2>Changes to this privacy policy</h2>
          <p>
            Select Maid has the discretion to update this privacy policy at any
            time. When we do, we will revise the updated date at the bottom of
            this page. We encourage Users to frequently check this page for any
            changes to stay informed about how we are helping to protect the
            personal information we collect. You acknowledge and agree that it is
            your responsibility to review this privacy policy periodically and
            become aware of modifications.
          </p>
          <h2>Your acceptance of these terms</h2>
          <p>
            By using this Site, you signify your acceptance of this policy. If you
            do not agree to this policy, please do not use our Site. Your
            continued use of the Site following the posting of changes to this
            policy will be deemed your acceptance of those changes.
          </p>
          <h2>Contacting us</h2>
          <p>
            If you have any questions about this Privacy Policy, the practices of
            this site, or your dealings with this site, please contact us at:
            <br />
            <a href="mailto:selectmaid@gmail.com">selectmaid@gmail.com</a>
          </p>
          <p>This document was last updated on January 1, 2024.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
