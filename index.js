        function sendToWhatsApp(e) {
            e.preventDefault();

            var name = document.getElementById('name').value;
            var count = document.getElementById('count').value;
            
            var message = "";
            if(count === "Imus") {
                 message = "Բարև, ես " + name + "-ն եմ: Ցավոք, չեմ կարողանա մասնակցել ծնունդիդ: 😔";
            } else {
                 message = "Բարև, ես " + name + "-ն եմ: Գալու եմ ծնունդիդ " + count + " հոգով: 🎉";
            }

            var phoneNumber = "+37498249545";

            var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
            
            window.open(url, '_blank');
        }