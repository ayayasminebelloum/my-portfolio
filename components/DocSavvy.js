"use client";
import Image from "next/image";

export default function DocSavvy() {
  return (
    <main
      className="min-h-screen pb-16"
      style={{
        backgroundImage: "url('/creambgg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Times New Roman', Times, serif",
        color: "#000",
      }}
    >
      {/* Logo at the top */}
      <div className="flex justify-center pt-12">
        <Image
          src="/DocSavvy/dsbg.png"
          alt="DocSavvy Logo"
          width={640}
          height={640}
          className="rounded-xl shadow-xl"
        />
      </div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 text-center">
        {/* Removed DocSavvy text */}
        <h2
          className="mb-10 font-normal max-w-4xl mx-auto"
          style={{
            fontSize: "1.5rem",
            fontFamily: "'Times New Roman', Times, serif",
          }}
        >
          A machine learning system that automatically categorizes documents into predefined classes, streamlining information retrieval and reducing manual workload.
        </h2>
        <a
          href="https://github.com/ayayasminebelloum/DocSavvy"
          target="_blank"
          rel="noopener noreferrer"
          className="px-12 py-6 bg-black text-white font-bold rounded-lg shadow hover:bg-[#222] transition mb-2 text-2xl"
        >
          Explore the Project’s code
        </a>
      </section>

      {/* Motivation & Problem Statement */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h3 className="text-[2.5rem] font-bold mb-8">Motivation & Problem Statement</h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Organizations handle large volumes of unstructured text (reports, emails, articles).</li>
          <li>Manual categorization is slow, error-prone, and inconsistent.</li>
          <li>Without automation, knowledge remains hard to search and underutilized.</li>
          <li>Goal: Build an AI-powered classifier that ensures faster, more accurate, and scalable document organization.</li>
        </ul>
      </section>

      {/* Dataset & Preprocessing */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8">Dataset & Preprocessing</h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>
            The dataset was formed by using multiple online datasets across multiple categories (news, legal, financial, technical). Each category had its own folder within “unstructured data”.
          </li>
          <li>
            Preprocessing Steps:
            <ul className="list-disc pl-8 mt-2">
              <li>OCR (Tesseract) to extract raw text from PDFs, JPEGs, PNGs, XLSX.</li>
              <li>Output CSV columns: id, text, label, timestamp.</li>
              <li>Unicode normalization (NFKC, NFD).</li>
              <li>Character substitution for common OCR misreads.</li>
              <li>Noise removal & formatting (regex).</li>
              <li>Multilingual spell correction (SymSpell, English/French/Spanish).</li>
              <li>Named Entity Recognition (spaCy multilingual model).</li>
              <li>Contextual cleanup for numbers, lists, headers.</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Classification */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8">Classification</h3>
        <p className="text-[1.5rem] mb-8">
          The classification pipeline uses a Hierarchical Attention Network (HAN) for document classification—classifying documents into types like invoices, receipts, communications, and contracts. HAN preserves document hierarchy (document → sentences → words) and uses attention to highlight important words and sentences. The model is interpretable, showing which parts of the document drove the prediction. spaCy is used for linguistic processing and domain-specific tokens. Weighted training and regularization (dropout) are used. The model achieves high accuracy and is especially strong in distinguishing invoices and receipts.
        </p>
      </section>

      {/* Feature Extraction */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8">Feature Extraction from Invoices</h3>
        <p className="text-[1.5rem] mb-8">
          The feature extraction stage checks for six fields in invoices: invoice_number, invoice_date, due_date, issuer_name, recipient_name, total_amount. Each field is treated as a binary classification problem. The model uses annotated data (OCR text + COCO-format JSON annotations) to train. Text is tokenized and padded, then passed to a Transformer-based encoder. The output is a binary prediction for each field. Training uses binary cross-entropy loss. After training, the model is evaluated on a test set, and predictions are stored for analysis.
        </p>
      </section>

      {/* Model Architecture */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8">Model Architecture & Techniques</h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li><strong>Baseline Models:</strong> Naïve Bayes, Logistic Regression, SVM with TF-IDF vectors.</li>
          <li>
            <strong>Advanced Models:</strong>
            <ul className="list-disc pl-8 mt-2">
              <li><strong>HAN:</strong> Document-type classification, preserves hierarchy, interpretable.</li>
              <li><strong>Transformer-based Field Extractor:</strong> Multi-label classification for invoice fields.</li>
            </ul>
          </li>
          <li>
            <strong>Pipeline Overview:</strong>
            <ul className="list-disc pl-8 mt-2">
              <li>Preprocessing: OCR → Cleaning → Spell correction → Multilingual handling.</li>
              <li>Feature Representation: TF-IDF, Word embeddings + Attention, Transformer embeddings.</li>
              <li>Classification: HAN for document type, Transformer for invoice fields.</li>
            </ul>
          </li>
        </ul>
        <div className="text-center mb-8">
          <h4 className="text-[1.7rem] font-bold mb-4">Hierarchical Attention Network</h4>
          <Image
            src="/DocSavvy/han.png"
            alt="Hierarchical Attention Network"
            width={600}
            height={360}
            className="rounded shadow mx-auto"
          />
        </div>
      </section>

      {/* Training & Evaluation */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8">Training & Evaluation</h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Split: 70% training, 15% validation, 15% test.</li>
          <li>Metrics: Accuracy, Precision, Recall, F1-score, Confusion Matrix.</li>
          <li>Cross-validation: k-fold validation for robustness.</li>
          <li>HAN Transformer model outperformed classical ML methods.</li>
        </ul>
      </section>

      {/* Deployment & Workflow */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8">Deployment & Workflow</h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Deployed as a REST API service that accepts raw text and outputs predicted class.</li>
          <li>Integrated into a web interface for easy testing and visualization.</li>
          <li>
            Workflow:
            <ul className="list-disc pl-8 mt-2">
              <li>Input document → preprocessing.</li>
              <li>Model inference → predicted label.</li>
              <li>Return result with confidence score.</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Results & Insights */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h3 className="text-[2.2rem] font-bold mb-8">Results & Insights</h3>
        <Image
          src="/DocSavvy/results.png"
          alt="Results & Insights"
          width={600}
          height={360}
          className="rounded shadow mb-4 mx-auto"
        />
      </section>

      {/* Future Extensions */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8">Future Extensions</h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Expand to multi-label classification (documents belonging to more than one category).</li>
          <li>Implement active learning where the system improves from user feedback.</li>
          <li>Add metadata-based features (author, source, time).</li>
          <li>Deploy as a cloud service with scalability for enterprise use.</li>
        </ul>
      </section>
    </main>
  );
}
