import PDFDocument from "pdfkit";

export const pdfDownload = async (req, res) => {
  try {
    const result = req.body;

    if (!result || typeof result !== "object") {
      return res.status(400).json({ message: "Invalid PDF data" });
    }

    const doc = new PDFDocument({ margin: 50 });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="Lexnote.pdf"'
    );

    doc.pipe(res);

    // ---------- TITLE ----------
    doc.fontSize(20).text("Lexnote", { align: "center" });
    doc.moveDown();

    // ---------- IMPORTANCE ----------
    if (result.importance) {
      doc.fontSize(14).text(`Importance: ${result.importance}`);
      doc.moveDown();
    }

    // ---------- SUB TOPICS ----------
    if (result.subTopics && typeof result.subTopics === "object") {
      doc.fontSize(16).text("Sub Topics");
      doc.moveDown(0.5);

      Object.entries(result.subTopics).forEach(([star, topics]) => {
        doc.fontSize(13).text(`${star}:`);
        (topics || []).forEach((t) => {
          doc.fontSize(12).text(`• ${t}`, { indent: 20 });
        });
        doc.moveDown(0.5);
      });
    }

    // ---------- NOTES ----------
    if (result.notes) {
      doc.moveDown();
      doc.fontSize(16).text("Notes", { align: "center" });
      doc.moveDown(0.5);

      doc.fontSize(12).text(
        String(result.notes).replace(/[#*]/g, "")
      );
    }

    // ---------- REVISION ----------
    if (Array.isArray(result.revisionPoints)) {
      doc.moveDown();
      doc.fontSize(16).text("Revision Points", { align: "center" });
      doc.moveDown(0.5);

      result.revisionPoints.forEach((p) => {
        doc.fontSize(12).text(`• ${p}`);
      });
    }

    // ---------- QUESTIONS ----------
    if (result.questions) {
      doc.moveDown();
      doc.fontSize(16).text("Important Questions");
      doc.moveDown();

      if (Array.isArray(result.questions.short)) {
        doc.fontSize(13).text("Short Questions:");
        result.questions.short.forEach((q) => {
          doc.fontSize(12).text(`• ${q}`);
        });
      }

      doc.moveDown();

      if (Array.isArray(result.questions.long)) {
        doc.fontSize(13).text("Long Questions:");
        result.questions.long.forEach((q) => {
          doc.fontSize(12).text(`• ${q}`);
        });
      }
    }

    doc.end();
  } catch (error) {
    console.error("PDF Error:", error);
    res.status(500).json({ message: "PDF generation failed" });
  }
};
