/* Exercicio 1 */

        let endereco = {
            rua: "Rua dos pinheiros",
            numero: 1293,
            bairro: "Centro",
            cidade: "São Paulo",
            uf: "SP"
            };

            const { rua, numero, bairro, cidade, uf} = endereco;
            console.log(`O usuário mora em ${cidade} / ${uf}, no bairro ${bairro}, na rua "${rua}" com número ${numero}.`); 

        /* Exercicio 2 */

        const pares = (x, y) => {
            for (let i = x; i <= y; i++) {
                if (i % 2 === 0){
                    console.log(i);
                }
            }
        };

        pares(32, 321); 

        /* Exercicio 3 */

        function temHabilidade(skills) {
            if (skills.indexOf("Javascript") !== -1) {
                return console.log (true);
            } else {
                console.log (false);
            }
        };

        var skills = ["Javascript", "ReactJS", "React Native"];
        temHabilidade(skills); // true ou false 

        /* Exercicio 4 */

        function experiencia(anos) {
            switch (true) {
                case anos >= 0 && anos <= 1:
                    console.log("Experiência: Iniciante");
                    break;
                case anos >= 1 && anos <= 3:
                    console.log("Experiência: Intermediário");
                    break;
                case anos >= 3 && anos <= 6:
                    console.log("Experiência: Avançado");
                    break;
                case anos >= 7:
                    console.log("Experiência: Jedi Master");
            }
        };
        
        var anosEstudo = 7;
        experiencia(anosEstudo);
        // De 0-1 ano: Iniciante
        // De 1-3 anos: Intermediário
        // De 3-6 anos: Avançado
        // De 7 acima: Jedi Master 

        /* Exercicio 5 */

        var usuarios = [
            {
            nome: "Diego",
            habilidades: ["Javascript", "ReactJS", "Redux"]
            },
            {
            nome: "Gabriel",
            habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
            }
            ];

            const mensagem = usuarios => {
                for (const individuo of usuarios) {
                    const { nome, habilidades } = individuo;
                    console.log(`O ${nome} possui as habilidades: ${habilidades.join(", ")}`);
                }
            };            