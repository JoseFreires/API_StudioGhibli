function procura(){
    alert("oi")
    let url = `https://ghibliapi.herokuapp.com/films/`
    fetch(url)
        .then((response) => response.json())
        .then(data => {
            var title_text = document.getElementById('title_input').value

            data.map(function (item){
                if(title_text != ''){
                    console.log(item.title)
                    
                    if(title_text == item.title){
                        console.log("estou aqui")
                        
                        document.getElementById('title').value = item.title;

                        document.getElementById('originalName').value = item.original_title;

                        document.getElementById('description').value = item.description;

                        document.getElementById('date').value = item.release_date;

                        document.getElementById('time').value = item.running_time;

                        document.getElementById('score').value = item.rt_score;
                    }
                }
                // else{
                //     alert("Nenhum dado recebido.")
                //     procura();
                // }
            });
        })


}