import { configure } from '@storybook/react';

function requireAll(requireContext) {
	return requireContext.keys().map(requireContext);
}


function loadStories() {
	requireAll(require.context("../src/components/", true, /\.story\.jsx$/));
}

configure(loadStories, module);
