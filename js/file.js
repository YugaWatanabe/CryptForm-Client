function outputLogFile() {
    function error(e) {
        alert("ERR!: " + e.name);
    }

    function writeFile(fs) {
        fs.root.getFile('/log.txt', { create: true }, function(fileEntry) {
            fileEntry.createWriter(function(fileWriter) {
                fileWriter.onwriteend = function(e) {
                    console.log('Write completed.');
                };

                fileWriter.onerror = function(e) {
                    console.log('Write failed: ' + e.toString());
                };

                var output = new Blob(["this is log data"], { type: "text/plain" });
                fileWriter.write(output);
            }, error);
        }, error);
    }
    window.webkitRequestFileSystem(window.TEMPORARY, 1024 * 1024, writeFile, error);
}