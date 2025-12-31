export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        AutoMsgs (“we”, “our”, “us”) respects your privacy and is committed to
        protecting your personal data. This Privacy Policy explains how we
        collect, use, and protect information when you use our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Email address and account information</li>
        <li>Instagram account ID and username (via Meta APIs)</li>
        <li>Automation rules created by you</li>
        <li>Logs related to automation activity</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Provide and operate the AutoMsgs service</li>
        <li>Enable Instagram comment and message automation</li>
        <li>Improve platform reliability and security</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Data Sharing</h2>
      <p className="mb-4">
        We do not sell or rent your personal data. Data is shared only with Meta
        Platforms as required to provide the service.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Data Retention</h2>
      <p className="mb-4">
        We retain data only as long as necessary to provide our services or as
        required by law.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
      <p className="mb-4">
        You may request access, correction, or deletion of your data at any time.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
      <p>
        For privacy-related questions, email us at{" "}
        <strong>support@automsgs.com</strong>
      </p>
    </main>
  );
}
