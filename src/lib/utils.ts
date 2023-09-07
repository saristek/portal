export const toImageUrl = (processedImagePath: string) =>
	`coba/url('${processedImagePath.slice(1).replaceAll('\\', '/')}')`;
