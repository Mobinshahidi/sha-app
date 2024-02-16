import { useState } from 'react';
import CryptoJS from 'crypto-js';

export default function App() {
	const [inputString, setInputString] = useState('');
	const [hashResult, setHashResult] = useState('');

	const handleInputChange = (e) => {
		setInputString(e.target.value);
	};

	const handleButtonClick = () => {
		if (inputString) {
			const hashedString = CryptoJS.SHA256(inputString).toString();
			setHashResult(hashedString);
		}
	};

	const handleCopyButtonClick = () => {
		if (hashResult) {
			const textArea = document.createElement('textarea');
			textArea.value = hashResult;
			document.body.appendChild(textArea);
			textArea.select();
			document.execCommand('copy');
			document.body.removeChild(textArea);
		}
	};

	return (
		<div className="flex items-center justify-center">
			<div className="relative w-[580px] h-[580px] flex flex-col items-center md:h-screen sm:h-screen ">
				<span className="flex flex-col items-center justify-center">
					<h1 className="font-bold mt-10 mb-28 text-xl">
						SHA-256 Hash Generator
					</h1>
					<label className="font-bold">
						Input String:
						<input
							className="rounded p-2 m-2 border-2 focus:border-2"
							type="text"
							value={inputString}
							onChange={handleInputChange}
						/>
					</label>
					<button
						className="btn btn-active btn-neutral mt-8"
						onClick={handleButtonClick}
					>
						Generate Hash
					</button>
					{hashResult && (
						<span>
							<h2 className="font-bold ">Hash Result:</h2>
							<div className="flex flex-col items-center mt-2">
								<p className="w-[370px] md:w-[580px] px-10 border-2 border-black md:px-6 py-10 rounded overflow-x-auto md:overflow-x-clip">
									{hashResult}
								</p>
								<button
									onClick={handleCopyButtonClick}
									className="btn btn-active btn-neutral mt-4"
								>
									Copy to Clipboard
								</button>
							</div>
						</span>
					)}
				</span>
				<a
					target="_blank"
					rel="noopener noreferrer"
					className="fixed bottom-0 p-4 font-bold"
					href="https://mobinshahidi.netlify.app"
				>
					mobinshahidi
				</a>
			</div>
		</div>
	);
}
