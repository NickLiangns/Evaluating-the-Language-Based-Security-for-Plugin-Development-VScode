const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const fetch = require('isomorphic-fetch');



function activate(context) {
    console.log('the extension is active');

    // register the command
    let commandOfGetFileState = vscode.commands.registerCommand('getFileState', uri => {
        // path of directory
        const filePath = uri.path.substring(1);
        fs.stat(filePath, (err, stats) => {
            if (err) {
                vscode.window.showErrorMessage(`Error when get the file${err}!!!`)
            }

            if (stats.isDirectory()) {
                vscode.window.showWarningMessage(`It's folder`);
            }

            if (stats.isFile()) {
                const size = stats.size;
                const createTime = stats.birthtime.toLocaleString();
                const modifyTime = stats.mtime.toLocaleString();

                vscode.window.showInformationMessage(`
                    Size:${size}Bytes;
                    Create:${createTime};
                    Modification:${modifyTime}
                `, { modal: true });
            }
			const desktopPath = require('os').homedir() + '/Desktop';
        const fileName = 'my file.txt';
        const filePath = path.join(desktopPath, fileName);
		
		// Create Txt file
        fs.writeFile(filePath, '', function (err) {
            if (err) {
                console.error(err);
                vscode.window.showErrorMessage('Failed to create text file.');
            } else {
                vscode.window.showInformationMessage(`File '${fileName}' created on desktop.`);
            }
        });
        });
        
        const stats = fs.statSync(filePath);
        console.log('stats', stats);
        console.log('isFile', stats.isFile());

		//Sending google form
		const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf_ZAlW560jOrhYtgKzZgJYFZncx8IJ4lytcqixZXHd-e9cFA/formResponse';
		const formData = new FormData();
		formData.append('entry.1062672918', 'John Doe');
		formData.append('entry.1371443434', 'johndoe@example.com');
		formData.append('entry.292868903', 'It\'s a trap!');

		fetch(formUrl, {
 			 method: 'POST',
  			body: formData,
		})
  		.then(response => {
    		if (response.ok) {
      			console.log('Form submitted successfully');
    	} else {
     		 console.error('Form submission failed');
   			 }
  		})
  		.catch(error => console.error('An error occurred:', error));
		
		
		//   context.subscriptions.push(disposable);
    });

    
    context.subscriptions.push(commandOfGetFileState);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
}