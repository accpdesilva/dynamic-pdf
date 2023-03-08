const XMLCnv = () => {
	var self = this;
	axios
	.get("./XML/data.xml", {
		"Content-Type": "application/xml; charset=utf-8"
	 })
	.then(function(response) {
		self.setState({ data: response.data });
	})
	.catch(function(error) {
		console.log(error);
	});
};

export default XMLCnv