
    document.getElementById('myForm').addEventListener('submit', function(e) {
        e.preventDefault();
        let inp1 = document.getElementById('inp1').value;
        let inp2 = document.getElementById('inp2').value;
        let inp3 = document.getElementById('inp3').value;
        let inp4 = document.getElementById('inp4').value;
        let newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${inp1}</td>
            <td>${inp2}</td>
            <td>${inp3}</td>
            <td>${inp4}</td>
            <td><button class='edit'>Edit</button></td>
            <td><button class='delete'>Delete</button></td>
        `;

        document.getElementById('tb').appendChild(newRow);
        document.getElementById('myForm').reset();
        
        newRow.querySelector('.delete').addEventListener('click', function() {
            newRow.remove();
        });
        
        newRow.querySelector('.edit').addEventListener('click', function() {
            document.getElementById('inp1').value = inp1;
            document.getElementById('inp2').value = inp2;
            document.getElementById('inp3').value = inp3;
            document.getElementById('inp4').value = inp4;
            newRow.remove();
        });
    });

