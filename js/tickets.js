const counters = document.querySelectorAll('.counter');
const numberOfTickets = document.querySelector('#how-many');

let a = Array.from(document.getElementsByClassName('cost')).map(c => parseInt(c.innerText.slice(0, -1)));


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

                let c = Array.from(document.querySelectorAll('#number')).map(c => parseInt(c.value));
                let total = 0;
                c.forEach((i, index) => {total += i * a[index]});
                document.querySelector('#total-cost').innerHTML = total;

                let sum = 0;
                
                document.querySelectorAll('#number').forEach(n => {
                    sum += parseInt(n.value);
                });

                numberOfTickets.innerHTML = sum;
            }
        })
    })
}

