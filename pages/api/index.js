const writeCsvData = require('./csvUpdater');

module.exports = async (req, res) => {
    let httpResponse = res;
    const {id, word, deck} = req.body;
    try {
        const res = await writeCsvData({id, word, deck});
        httpResponse.status(200).send({success: true});
    } catch (error) {
        httpResponse.status(500).send({success: false, error: err});
    }
}

// (async () => {
//     try {
//         const res = await writeCsvData({id: 'VocabET1', word:'benign', deck:'3'})
//         console.log("success");
//     } catch (error) {
//         console.log("error",error)
//         process.exit(-1);
//     }
//     process.exit();
// })();