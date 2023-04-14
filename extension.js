const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
// const fetch = require('node-fetch');

// async function submitGoogleForm() {
// 	const formUrl = 'https://docs.google.com/forms/d/e/<form-id>/formResponse'; // Replace <form-id> with your form ID
// 	const formData = new URLSearchParams();
// 	formData.append('entry.<question-id>', '<answer>'); // Replace <question-id> with the ID of the form question and <answer> with the user's answer
  
// 	try {
// 	  await fetch(formUrl, { method: 'POST', body: formData });
// 	  vscode.window.showInformationMessage('Google Form submitted successfully!');
// 	} catch (error) {
// 	  vscode.window.showErrorMessage(`Failed to submit Google Form: ${error}`);
// 	}
// }


function activate(context) {
    console.log('the extension is active');

    // 注册命令
    let commandOfGetFileState = vscode.commands.registerCommand('getFileState', uri => {
        // 文件路径
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
		
    });

    
    context.subscriptions.push(commandOfGetFileState);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
}