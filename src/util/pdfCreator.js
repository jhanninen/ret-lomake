import jsPDF from "jspdf"
import "jspdf-autotable";

export const createPDF = (name, account, sum) => {
  const doc = new jsPDF()

  doc.setFontSize(12)

  const m1 = 15;
  const m2 = 50;
  const m3 = 150;

  doc.text("RUOKOLAHDEN ERÄTOVERIT RY", m1, 20)
  doc.text("Tilityslomake", m1, 30)

  doc.text("TOSITE", 210 - m1, 20, { align: "right" })

  doc.text("NIMI", m1, 50)
  doc.text(name, m2, 50)

  doc.text("PANKKITILI", m1, 60)
  doc.text(account, m2, 60)

  doc.text("Tilitykset numeroituina kuittien mukaan", m1, 80)

  doc.text(`Lomakkeella tilitettävä summa on ${sum} euroa.`, m1, 170)

  doc.text("Päivämäärä", m1, 190)
  const d = new Date();
  doc.text(d.toLocaleDateString('fi-FI'), m2, 190)

  doc.text("Maksettu", m1, 210)
  doc.line(m2, 210, m3, 210)

  doc.text("Tunniste", m1, 220)
  doc.line(m2, 220, m3, 220)

  doc.text("Kirjanpitäjän merkintöjä:", m1, 240)

  doc.autoTable({html: '#kuittitaulukko', startY: 85, theme: 'plain'});
  //
  doc.save("tilityslomake.pdf")
}

