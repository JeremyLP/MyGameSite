const request = require('request');

describe(
    "Test of component Gameplay",
    () => {
        let maj = {
            maj_title: 'Ceci est une version de MAJ',
            maj_content: 'Ceci est un contenu descriptif de MAJ',
            maj_img: 'Ceci est un chemin d accés vers une image',
        };


        beforeAll(
            (done) => {
                const server = require('../server.js');
                done();
            }
        )

        it(
            "POST inside Table maj",
            (done) => {
                request.post("http://localhost:8000/api/maj/",
                {
                    json: true,
                    body: maj,
                },
                (err, response, body) => {
                    console.log(body)
                    expect(body.id).toBeGreaterThan(0);
                    expect(body.maj_title).toBe(maj.maj_title);
                    expect(body.maj_content).toBe(maj.maj_content);
                    expect(body.maj_img).toBe(maj.maj_img);
                    maj.id = body.id;
                    done();
                }
                )
            }
        )

        // Ici on test la récupération d'info dans la Table maj
        it(
            "Get * from maj",
            (done) => {

                // maj.maj_title = "Test";
                // maj.maj_content = "Test";
                // maj.maj_img = "Test";

                request.get(
                    "http://localhost:8000/api/maj/",
                    {
                        json: true,
                    },
                    (error, response, body) => {
                        console.log(body, "LE BODY")
                        expect(body[body.length - 1].id).toBeGreaterThan(0);
                        expect(body[body.length - 1].maj_title).toBe(maj.maj_title);
                        expect(body[body.length - 1].maj_content).toBe(maj.maj_content);
                        expect(body[body.length - 1].maj_img).toBe(maj.maj_img);
                        done();
                    }
                )
            }
        )
    }
)