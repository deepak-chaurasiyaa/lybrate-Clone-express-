const express = require("express");
const router = express.Router();
const Questions = require("../models/askAquestion.model")


let fedAr = [
    {
        name: 'Dr.Narasimhalu C.R.V.(Professor)',
        doc: 'https://assets.lybrate.com/q_auto:low,f_auto,h_80,w_80,c_fill,g_auto:face/img/documents/doctor/dp/418fd0875b98e604669aa561225a8a34/Dermatology-NarasimhaluCrv-Chennai-b7b784.JPG',
        pat: 'https://assets.lybrate.com/q_auto:eco,f_auto,w_850/imgs/tic/managing-acne/female/Managing-Acne-female-02.jpg'
    },
    {
        name: 'Dr.Yasmin Asma Zohara',
        doc: 'https://assets.lybrate.com/q_auto:low,f_auto,h_80,w_80,c_fill,g_auto:face/img/documents/doctor/dp/d560175ec52a981d88f6eabe4f716e42/Dentistry-YasminAsmaZohara-Chennai-456afe.jpg',
        pat: 'https://assets.lybrate.com/q_auto:eco,f_auto,w_850/imgs/tic/improving-oral-and-dental-health/female/Improving-Oral-Dental-Health-female-22.jpg'
    },
    {
        name: 'Dr.Sajeev Kumar',
        doc: 'https://assets.lybrate.com/q_auto:low,f_auto,h_80,w_80,c_fill,g_auto:face/img/documents/doctor/dp/06dba1f9cb563ebd8e679b8950342df1/Pediatrics-SajeevKumar-CHENGANNUR-eaeebf.JPG',
        pat: 'https://assets.lybrate.com/q_auto:eco,f_auto,w_850/imgs/tic/preventing-flu-cold-and-cough/Female/preventing-flu-cold-cough-female-06.jpg'
    },
    {
        name: 'Dr.N S S Gauri',
        doc: 'https://assets.lybrate.com/q_auto:low,f_auto,h_80,w_80,c_fill,g_auto:face/img/documents/doctor/dp/4157d9f89525e7436a6e29fab0f70f19/Unani-NSSGauri-kanpur-d31dd1.jpg',
        pat: 'https://assets.lybrate.com/q_auto:eco,f_auto,w_850/imgs/tic/improving-skin-health/female/improving-skin-health-female-106.jpg'
    }

]


router.get("", async (request, response) => {
    const data = await Questions.find().lean().exec();
    // console.log(data);
    response.render("healthFeed.view.ejs", { questions: data ,  fedAr : fedAr});
})

module.exports = router;