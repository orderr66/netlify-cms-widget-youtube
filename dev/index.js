import "./bootstrap.js";
import CMS, { init } from "netlify-cms";
import "netlify-cms/dist/cms.css";
import { youtubeControl, youtubePreview } from "../src";

const config = {
	backend: {
		name: "test-repo",
		login: false
	},
	media_folder: "assets",
	collections: [
		{
			name: "test",
			label: "test",
			files: [
				{
					file: "test.yml",
					name: "Youtube Test",
					label: "Youtube Test",
					fields: [
						{
							name: "youtube_widget",
							label: "Youtube",
							widget: "youtube"
						}
					]
				}
			]
		}
	]
};

CMS.registerWidget("youtube", youtubeControl, youtubePreview);

init({ config });