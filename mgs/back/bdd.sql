CREATE TABLE maj (
    id INT PRIMARY KEY AUTO_INCREMENT,
    maj_title VARCHAR(250),
    maj_content TEXT(60000),
    maj_img VARCHAR(250)
);

INSERT INTO maj (maj_title, maj_content, maj_img) VALUES ('MAJ 0.0.1', 'Pas grand chose à ajouter', 'Que dale');

CREATE TABLE gallery (
    id INT PRIMARY KEY AUTO_INCREMENT,
    gallery_title VARCHAR(250),
    gallery_img VARCHAR(250)
);

INSERT INTO gallery