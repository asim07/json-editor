const editJsonFile = require("edit-json-file");


const doit = (filename) => {
    file = editJsonFile(`./json/${filename}.json`, {
        autosave: true
    });
    file.set("description", "The Antara Movie NFT");
    file.set("name", `Antara Movie NFT #${filename}`);
    console.log(filename, "Updated successfully");

}
let i = 1;
while (true) {
    if (i == 8000) {
        break;
    }

    doit(i);
    i += 1;
}