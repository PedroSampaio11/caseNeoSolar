const { PDFDocument, rgb } = require('pdf-lib');
const { createObjectCsvWriter } = require('csv-writer');
const fs = require('fs');
const geradores = require('./geradores.js');

async function createCSV() {
    const csvWriter = createObjectCsvWriter({
        path: 'tabela_geradores.csv',
        header: [
            { id: 'Id', title: 'ID' },
            { id: 'Potencia', title: 'Potência' },
            { id: 'Produtos', title: 'Produtos' },
            { id: 'NomedosProdutos', title: 'Nome dos Produtos' },
            { id: 'Quantidade', title: 'Quantidade' },
        ]
    });

    await csvWriter.writeRecords(geradores);
    console.log('CSV com a tabela de geradores criado com sucesso!');
}

async function createPDF() {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();

    const fontSize = 12;
    let text = `
        Prezado Time de Marketing da Neosolar,

        Segue abaixo a relação dos geradores configurados na semana:

        - Geradores Configurados: ${geradores.length}

    `;

    geradores.forEach(gerador => {
        text += `
        ID: ${gerador.Id}
        Potência: ${gerador.Potencia}
        Produtos: ${gerador.Produtos}
        Nomes dos Produtos: ${gerador.NomedosProdutos}
        Quantidade: ${gerador.Quantidade}
        `;
    });

    page.drawText(text, {
        x: 50,
        y: height - 4 * fontSize,
        size: fontSize,
        color: rgb(0, 0, 0),
    });

    const outputPath = './output/email_para_marketing.pdf';
    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync(outputPath, pdfBytes);
    console.log('PDF com o e-mail criado com sucesso em:', outputPath);
}

async function generateFiles() {
    await createCSV();
    await createPDF();
}

generateFiles().catch(err => console.log(err));
