const counters = document.querySelectorAll('.counter');
const numberOfTickets = document.querySelector('#how-many');


if (counters){
    counters.forEach(counter => {
        counter.addEventListener('click', e => {
            const target = e.target;

            if (target.closest('.counter')){
                let value = parseInt(target.closest('.count').querySelector('input').value);

                if (target.classList.contains('add')){
                    value++;
                }else{
                    --value;
                }

                if (value < 0){
                    value = 0;
                }

                target.closest('.count').querySelector('input').value = value;
                let sum = 0;
                
                document.querySelectorAll('#number').forEach(n => {
                    sum += parseInt(n.value);
                });

                numberOfTickets.value = sum;
                console.log(numberOfTickets);
            }
        })
    })
}

