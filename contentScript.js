htmlString = "<input type='file' id='fileRead' accept='.csv'>"
$("body").prepend(htmlString)
function handleFileSelect(evt){
    inputfile = evt.target.files[0]
    reader = new FileReader()
    reader.onload = function(e){
        x = reader.result
        csv_string = x.replace(/,/g,' ')
        $("#id_textDataEditor")[0].value = csv_string
    }
    reader.readAsText(inputfile);
}
document.getElementById('fileRead').addEventListener('change', handleFileSelect, false);