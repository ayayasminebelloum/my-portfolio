"use client";
import Image from "next/image";

export default function Looklytics() {
  return (
    <main
      className="min-h-screen pb-16"
      style={{
        backgroundImage: "url('/eye.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Times New Roman', Times, serif",
        color: "#fff"
        // removed backgroundColor and backgroundBlendMode
      }}
    >
      {/* Logo at the top */}
      <div className="flex justify-center pt-12">
        <Image
          src="/Looklytics/logo.png"
          alt="Looklytics Logo"
          width={640}
          height={640}
          className="rounded-xl shadow-xl"
        />
      </div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 text-center">
        <h2
          className="mb-10 font-normal max-w-4xl mx-auto"
          style={{
            fontSize: "1.5rem",
            fontFamily: "'Times New Roman', Times, serif",
            color: "#000",
          }}
        >
          Ad Region of Interest (ROI) Tracker<br />
          Lightweight gaze-tracking and heatmap visualization using a standard RGB webcam.
        </h2>
        <a
          href="https://github.com/ayayasminebelloum/Computer-Vision"
          target="_blank"
          rel="noopener noreferrer"
          className="px-12 py-6 bg-[#cc007e] text-white font-bold rounded-lg shadow hover:bg-[#cc007e] transition mb-2 text-2xl"
        >
          Explore the Project’s code
        </a>
      </section>

      {/* Overview */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h3 className="text-[2.5rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Overview
        </h3>
        <p className="text-[1.5rem] mb-8" style={{ color: "#000" }}>
          This project implements a practical, low-cost gaze-tracking pipeline that uses an ordinary RGB webcam and open-source software to estimate where users look on-screen. The system combines facial landmark detection, pupil localization, homography-based calibration, and real-time heatmap generation to translate raw eye movement into actionable visual feedback for ad optimization, UX testing, and attention analysis.
        </p>
      </section>

      {/* Value Proposition */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Value Proposition
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]" style={{ color: "#000" }}>
          <li>Affordable, scalable gaze capture with a webcam (no special hardware).</li>
          <li>Real-time ROI mapping and heatmaps to pinpoint high- and low-attention regions.</li>
          <li>Fast calibration and distance compensation so sessions remain robust to head movement.</li>
          <li>Modularity for easy extension — support multiple ads, export gaze data, or integrate into broader UX pipelines.</li>
        </ul>
      </section>

      {/* Technical Overview */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Technical Overview
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]" style={{ color: "#000" }}>
          <li><strong>camera.py</strong> — abstracts webcam capture and frame retrieval.</li>
          <li><strong>gaze_tracking/</strong> — modified from ritko/GazeTracking; contains eye.py, pupil.py, and gaze_tracking.py for facial landmarking, eye segmentation, pupil localization, and raw gaze ratios.</li>
          <li><strong>ad_tracking/</strong> — custom logic for calibration, homography mapping, and ad display. Includes calibrate.py, ad.py, and mapping utilities.</li>
          <li><strong>main.py</strong> — orchestrates calibration → ad presentation → real-time gaze sampling → heatmap rendering.</li>
        </ul>
        <div className="mb-8">
          <h4 className="text-xl font-bold mb-2" style={{ color: "#cc007e" }}>
            Gaze Tracking Frame Operations
          </h4>
          <Image
            src="/Looklytics/gaze-tracking-frame.png"
            alt="Gaze Tracking Frame Operations"
            width={900}
            height={540}
            className="rounded shadow mb-8 mx-auto"
          />
        </div>
      </section>

      {/* Calibration & Mapping */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Calibration & Mapping
        </h3>
        <p className="text-[1.5rem] mb-8" style={{ color: "#000" }}>
          Accurate gaze-to-screen projection is achieved with a fast nine-point calibration. The user looks at a nine-point grid on screen; pupil centroids and gaze ratios are recorded for each target. Calibration computes averaged source & destination points and derives a homography matrix via OpenCV. Inter-pupillary distance (IPD) is computed and used as a proxy for user distance, scaling gaze projections to stay accurate when the user moves. This preserves spatial accuracy across head movement and varying user distance without expensive hardware.
        </p>
        <div className="mb-8">
          <h4 className="text-xl font-bold mb-2" style={{ color: "#cc007e" }}>
            Calibration and Object Mapping
          </h4>
          <Image
            src="/Looklytics/calibration-mapping.png"
            alt="Calibration and Object Mapping"
            width={900}
            height={540}
            className="rounded shadow mb-8 mx-auto"
          />
        </div>
      </section>

      {/* Heatmap Generation & Visualization */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Heatmap Generation & Visualization
        </h3>
        <p className="text-[1.5rem] mb-8" style={{ color: "#000" }}>
          During ad display, gaze estimates are continuously warped into screen coordinates using the homography matrix. These coordinates incrementally populate a 2D accumulator array. The accumulator is blurred using a Gaussian filter, normalized, and overlaid onto the original ad image using Matplotlib. The result is an intuitive visual overlay highlighting regions of prolonged attention.
        </p>
        <div className="mb-8">
          <h4 className="text-xl font-bold mb-2" style={{ color: "#cc007e" }}>
            Example Output
          </h4>
          <Image
            src="/Looklytics/example-output.png"
            alt="Example Output"
            width={900}
            height={540}
            className="rounded shadow mb-8 mx-auto"
          />
        </div>
      </section>

      {/* Data Flow */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Data Flow (step-by-step)
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]" style={{ color: "#000" }}>
          <li>Calibration Phase: capture frames → extract pupil centroids → record gaze ratios → compute homography & average IPD.</li>
          <li>Ad Viewing Phase: display ad full-screen → capture frames → estimate gaze → transform to screen coords → update heatmap accumulator.</li>
          <li>Post-Processing Phase: apply Gaussian blur → overlay heatmap on ad → display/save result for analysis.</li>
        </ul>
      </section>

      {/* Implementation & Key Files */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Implementation & Key Files
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]" style={{ color: "#000" }}>
          <li><strong>src/main.py</strong> — main pipeline and program entry.</li>
          <li><strong>src/camera.py</strong> — webcam management.</li>
          <li><strong>src/gaze_tracking/*</strong> — eye segmentation, pupil localization, core gaze estimation.</li>
          <li><strong>src/ad_tracking/*</strong> — calibration, homography creation, ad display, heatmap logic.</li>
          <li><strong>requirements.txt & README.md</strong> — install and run instructions.</li>
        </ul>
        <div className="mb-8">
          <h4 className="text-xl font-bold mb-2" style={{ color: "#cc007e" }}>
            Repository Tree
          </h4>
          <Image
            src="/Looklytics/repo-tree.png"
            alt="Repository Tree"
            width={900}
            height={540}
            className="rounded shadow mb-8 mx-auto"
          />
        </div>
      </section>

      {/* Evaluation & Use Cases */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Evaluation & Use Cases
        </h3>
        <h4 className="text-xl font-bold mb-4" style={{ color: "#cc007e" }}>
          Evaluation
        </h4>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]" style={{ color: "#000" }}>
          <li>The system produces clear, interpretable heatmaps that reflect focal points on ads.</li>
          <li>Calibration & IPD compensation significantly improve projection stability when users move.</li>
          <li>Limitations include residual noise from poor lighting, low-resolution webcams, and extreme head pose.</li>
        </ul>
        <h4 className="text-xl font-bold mb-4" style={{ color: "#cc007e" }}>
          Typical Use Cases
        </h4>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]" style={{ color: "#000" }}>
          <li>Ad testing: evaluate visual hierarchy and CTA prominence.</li>
          <li>UX research: identify confusing UI areas or overlooked affordances.</li>
          <li>Academic study: low-cost gaze data collection for behavioral experiments.</li>
        </ul>
      </section>
    </main>
  );
}

