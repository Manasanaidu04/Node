exports.getBasicNotes = function(req, res) {
    myNotes = [
        {
            'name': 'pa'
        },
         {
            'name': 'da'
        },
         {
            'name': 'ni'
        },
         {
            'name': 'sa'
        }
    ];
    
    res.json(myNotes);
}
   