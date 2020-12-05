import "@vaadin/vaadin-dialog";

const data = [
    ['', 'Tesla', 'Volvo', 'Toyota', 'Ford'],
    ['2019', 10, 11, 12, 13],
    ['2020', 20, 11, 14, 13],
    ['2021', 30, 15, 12, 13]
];

window.addEventListener('load', () => {
    const vaadinDialog = document.createElement("vaadin-dialog");
    vaadinDialog.setAttribute("aria-label", "simple");

    const btn = document.createElement("vaadin-button");
    btn.innerText = "Show Dialog";
    customElements.whenDefined('vaadin-dialog').then(function () {
        // const dialog = document.querySelector('vaadin-dialog');
        vaadinDialog.renderer = function (root, dialog) {
            root.textContent = 'This simple dialog will close by pressing the Esc key, or by a mouse click anywhere outside the dialog area';
        };
        document.querySelector('vaadin-button').addEventListener('click', function () {
            vaadinDialog.opened = true;
        });
    });

    document.body.appendChild(vaadinDialog);
    document.body.appendChild(btn);

    const handson = document.createElement("div");
    handson.id = "example";
    document.body.appendChild(handson);

    /*
    const container = document.getElementById('example');
    const example = new Handsontable(container, {
        data: resp.digitizedData.response[0].tables[3].summary,
        //data: data,
        rowHeaders: false,
        colHeaders: true,
        manualRowResize: true,
        manualColumnResize: true,
        filters: true,
        dropdownMenu: true,
        contextMenu: true,
        language: "en-US",
        licenseKey: 'non-commercial-and-evaluation',
    });
    */

    const example = new Handsontable(container, {
        // data:  resp.digitizedData.response[0].tables[3].summary,
        data: [' ', ' ', ' ', ' '],
        rowHeaders: false,
        colHeaders: true,
        manualRowResize: true,
        manualColumnResize: true,
        height: 500 * 0.45,
        contextMenu: true,
        language: "en-US",
        // licenseKey: "non-commercial-and-evaluation",
    });
})