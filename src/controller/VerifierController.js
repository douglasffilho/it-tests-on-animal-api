const VerifierController = {
    async verifyByText(req, res) {
        const { text } = req.params;
        return res.status(200).json({
            search: text,
            name: 'Product',
            brand: 'brand',
            itMakesTestsOnAnimals: true
        });
    }
};

export default VerifierController;
