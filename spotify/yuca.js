// Lista de canciones
const canciones = [
  { nombres: ["Adalina"], artista: "Jorge Oñate, Colacho Mendoza", cancion: "Adalina", link: "https://open.spotify.com/track/6TmTaBHBR2li68Ds1sIrEh?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Alcirita"], artista: "Luis Enrique Martínez", cancion: "Alcirita", link: "https://open.spotify.com/track/0eh3kAnB4gJdRA0Rcu2s2W?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Alicia"], artista: "Alejo Duran", cancion: "Alicia Adorada", link: "https://open.spotify.com/track/1B8vfI3NI7zEvrd64Av1Sj?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Amalia"], artista: "Los Hermanos Zuleta", cancion: "Amalia Vergara", link: "https://open.spotify.com/track/5cFFJgc5H6hDrWaN2Q1iyo?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Ana"], artista: "Jorge Oñate, Cocha Molina", cancion: "Ana Felicia", link: "https://open.spotify.com/track/5Y38v6vENBnQMabBpPzvcC?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Ana"], artista: "Alfredo Gutierrez", cancion: "Ana María", link: "https://open.spotify.com/track/4LOM15mXGUWclCXf5lLTFM?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Angélica"], artista: "Juancho Polo Valencia", cancion: "Angélica María", link: "https://open.spotify.com/track/68rIeZMYRPEVRtKh9KxzuQ?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Catalina"], artista: "Los Diablitos", cancion: "Ay, Mi Catalina", link: "https://open.spotify.com/track/6gJre2SIrReRsuSENQnCwq?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Azucena"], artista: "Pello Osorio, Elías Mendoza", cancion: "Azucena", link: "https://open.spotify.com/track/0gqogtPxbzYKff5zM1r6yj?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Bertha"], artista: "Hermanos López, Jorge Oñate", cancion: "Bertha Caldera", link: "https://open.spotify.com/track/3Kzu5AOjwcOGtFts38GgCe?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Carmen"], artista: "Emiliano Zuleta", cancion: "Carmen Díaz", link: "https://open.spotify.com/track/4vIpUo47wdax7Js4K872Ni?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Carmen"], artista: "Silvestre Dangond, Juancho De La Espriella", cancion: "Carmen Gomez", link: "https://open.spotify.com/track/5JJu54fYNj7m5tLUEagFXd?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Carmen"], artista: "Miguel Lopez, Armando Mendoza", cancion: "Carmen Toña", link: "https://open.spotify.com/track/0qP3w2i2V480myiP0qMpT3?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Carmen", "Carmencita"], artista: "Binomio de Oro", cancion: "Carmencita", link: "https://open.spotify.com/track/3rvesp28Y5m0XbfUP1Mw9C?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Carmen", "Carmencita"], artista: "Alfredo Gutierrez", cancion: "Carmencita", link: "https://open.spotify.com/track/2fH4yHgMiOBSgiMOI06G28?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Carmen", "Carmencita"], artista: "Miguel Durán", cancion: "Carmencita", link: "https://open.spotify.com/track/2T2ChLV79FoexzkCCvjjO1?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Catalina"], artista: "Lorenzo Morales Herrera", cancion: "Catalina Daza", link: "https://open.spotify.com/track/0DrQxvJkOUxpOg9fNQioxT?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Cecilia"], artista: "Los Hermanos Zuleta", cancion: "Cecilia Mercedes", link: "https://open.spotify.com/track/7s3eup1LN7phz2MPJ2sEt2?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Claudia"], artista: "Los Hermanos Zuleta", cancion: "Claudia", link: "https://open.spotify.com/track/6XqhNb9WphjVe49xQEqFIq?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Consuelo"], artista: "Diomedes Diaz, El Cocha Molina", cancion: "Consuelo", link: "https://open.spotify.com/track/5lvcTGgsHB37pnln0p2ReP?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Corina"], artista: "Colacho Mendoza, Ivo Díaz", cancion: "Corina", link: "https://open.spotify.com/track/5JyPmLJ2BTflxdBXFpTmJE?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Cristina"], artista: "Diomedes Diaz", cancion: "Cristina Isabel", link: "https://open.spotify.com/track/7cShs4kgshWlSOKZ8OZLLo?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Crucita"], artista: "Los Hermanos Zuleta", cancion: "Crucita", link: "https://open.spotify.com/track/6AOGJMr4WRZyKKUXLxLOF2?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Dayana"], artista: "Los Hermanos Zuleta", cancion: "Dayana", link: "https://open.spotify.com/track/42JJmzzA4hVKBEeoE87ZJJ?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Diana"], artista: "Diomedes Diaz", cancion: "Diana", link: "https://open.spotify.com/track/0reA6exUVjbFIHDruwsqVy?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Dina"], artista: "Hermanos López, Jorge Oñate", cancion: "Dina López", link: "https://open.spotify.com/track/6iUA8MdbgWDcUmMz7jZj5o?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Dina"], artista: "Alfredo Gutierrez", cancion: "Dina Luz", link: "https://open.spotify.com/track/4ziRpMKfSmV3floibhm9em?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Dubys"], artista: "Hermanos López, Jorge Oñate", cancion: "Dubys Caballero", link: "https://open.spotify.com/track/6JnK1MlVP2U3LiKlslo1GG?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Enriqueta"], artista: "Alejandro Duran Y Su Conjunto", cancion: "Enriqueta", link: "https://open.spotify.com/track/12BcuEOQIxlSwPFcA30Yx0?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Esperanza"], artista: "Diomedes Diaz, Colacho Mendoza", cancion: "Esperanza", link: "https://open.spotify.com/track/0mmiLuxAWYdrORfnyTgK9r?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Estela", "Estelita"], artista: "Hermanos López, Jorge Oñate", cancion: "Estelita González", link: "https://open.spotify.com/track/1RB8ybICfxwj0Fh92IDlCL?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Fidelina"], artista: "Alejo Duran", cancion: "Fidelina", link: "https://open.spotify.com/track/3opWzjpqfRz7VcX7ibggqg?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Geña"], artista: "Miguel Cabrera", cancion: "Gena", link: "https://open.spotify.com/track/6LryzoljQXja3GiLyoGSZL?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Gina"], artista: "Los Diablitos", cancion: "Gina", link: "https://open.spotify.com/track/4kZP9PdxIwvQqDqX1avCZx?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Gloria"], artista: "Los Hermanos Zuleta", cancion: "Gloria De Mi Alma", link: "https://open.spotify.com/track/6sb1nAlp7cgvpeVJxk1zmd?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Indira"], artista: "Los Hermanos Zuleta", cancion: "Indira", link: "https://open.spotify.com/track/38fkunDYuCdgvCPqZrakQ8?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Inés", "Inesita"], artista: "Luis Enrique Martínez", cancion: "Inesita", link: "https://open.spotify.com/track/7ncVKFw1qIGEQQ2FHz3Yk2?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Irene"], artista: "Jorge Oñate", cancion: "Irene", link: "https://open.spotify.com/track/6n9q3hO57id57BP2DxXi7p?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Isabel"], artista: "Los Hermanos Zuleta", cancion: "Isabel Martinez", link: "https://open.spotify.com/track/2rmljmHUphbgmyWscJoppZ?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Jenny"], artista: "Jorge Oñate", cancion: "Jenny", link: "https://open.spotify.com/track/5wm85JPy1aiWvVsdvv2T0k?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Joselina"], artista: "Diomedes Diaz, El Cocha Molina", cancion: "Joselina Daza", link: "https://open.spotify.com/track/6LNFDIgI8D15F6sMT8NHUe?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Juana"], artista: "Binomio de Oro de América", cancion: "Juana Apolinaria", link: "https://open.spotify.com/track/2dQWkr0OOB82DsVjxmRXcw?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Juana"], artista: "Los Hermanos Zuleta", cancion: "Juana Bautista", link: "https://open.spotify.com/track/1T9WRiu1VnsCgEDbSBfoFQ?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Juana"], artista: "Bovea Y Sus Vallenatos", cancion: "Juana Blandón", link: "https://open.spotify.com/track/3EsAED4U5kP27GOsOE0r22?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Juliana"], artista: "Israel Romero, Jean Carlos Centeno, Jesús Manuel", cancion: "Juliana", link: "https://open.spotify.com/track/73UEP7NlNqj8Fj8mw4fmkE?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Maria"], artista: "Ivan Villazon, Saul Lallemand", cancion: "La Maria Namen", link: "https://open.spotify.com/track/60ztRFzjfSrNEGJ6GqAQom?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Marina", "Maye"], artista: "Rafael Escalona", cancion: "La Maye", link: "https://open.spotify.com/track/3wnmSPRRlnAz8VxBDYa7qp?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Sara"], artista: "Jorge Oñate", cancion: "La Vieja Sara", link: "https://open.spotify.com/track/4KZp53cZ0tEY47mbonirxh?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Laura"], artista: "Diomedes Diaz, Naffer Durán", cancion: "Laura", link: "https://open.spotify.com/track/774mXqzdvRw6H5jBPvmUv2?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Ligia"], artista: "Hermanos López, Jorge Oñate", cancion: "Ligia", link: "https://open.spotify.com/track/1GhaBW8zohZIcWdHyvWO1s?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Lucila"], artista: "Enrique Diaz", cancion: "Lucila", link: "https://open.spotify.com/track/6gRi2PBGMFSaqdI4fzeqPm?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Luisa"], artista: "Jorge Oñate Gonzalez", cancion: "Luisa Fernanda", link: "https://open.spotify.com/track/2DggS9lRaHR4D0ImFvorLW?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Luz"], artista: "Binomio de Oro", cancion: "Luz Mery", link: "https://open.spotify.com/track/3BnLDG2wZdVntwwjOqQMUz?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Luzmila"], artista: "Los Hermanos Zuleta", cancion: "Luzmila", link: "https://open.spotify.com/track/4FphUWQSA4lwGQ2V9FqWTq?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Margarita"], artista: "Diomedes Diaz, Colacho Mendoza", cancion: "Margarita", link: "https://open.spotify.com/track/5dccNt1n6bSgN0WnZIeARM?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Maria"], artista: "Diomedes Diaz, Colacho Mendoza", cancion: "Maria", link: "https://open.spotify.com/track/4CBK7eOuaR6qi8MAJnQ9Yd?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Maria"], artista: "Binomio de Oro de América", cancion: "Maria Almanza", link: "https://open.spotify.com/track/6Z85ePNVsXneAEiSDK9rmC?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Maria"], artista: "Héctor Zuleta, Adanies Diaz", cancion: "Maria Claudia", link: "https://open.spotify.com/track/0Zu7NXA2N3o2y0LF30u7iN?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Maria"], artista: "Diomedes Diaz", cancion: "Maria Espejo", link: "https://open.spotify.com/track/5HyUrcvS7xwozuFYIjf3lw?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Maria"], artista: "Diomedes Diaz", cancion: "Maria Esther", link: "https://open.spotify.com/track/2ILH9DNJBBLPVezpPrHkEc?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Maria"], artista: "Jorge Oñate, Juancho Rois", cancion: "Maria Eugenia", link: "https://open.spotify.com/track/0TT1Qa5LPWXFAZnAvHXfHs?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Marianita"], artista: "Héctor Zuleta, Adanies Diaz", cancion: "Marianita", link: "https://open.spotify.com/track/6UGBFrpIH1ub2r2P5WR70d?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Maribel"], artista: "Jorge Oñate", cancion: "Maribel", link: "https://open.spotify.com/track/2UXOF0FnpH11miUS68kaBi?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Maricela"], artista: "Jorge Oñate, Colacho Mendoza", cancion: "Maricela", link: "https://open.spotify.com/track/5SBwdwOwZTyMKGEDwdH9ot?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Marily"], artista: "Farid Ortiz", cancion: "Marily", link: "https://open.spotify.com/track/2Zq2XoB8fL7xn2VeX374jw?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Marleny"], artista: "Diomedes Diaz, Juancho Rois", cancion: "Marleny", link: "https://open.spotify.com/track/6a14Sq9nheglzKB8uynMdS?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Martha"], artista: "Luis Enrique Martínez", cancion: "Martha Helena", link: "https://open.spotify.com/track/7ozCsKzhMiS9rLefTfgwiQ?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Mary"], artista: "Kaleth Morales, Juank Ricardo", cancion: "Mary", link: "https://open.spotify.com/track/5gSeLhBOAKZ0Dp8tkqlVOD?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Mary"], artista: "Diomedes Diaz, Colacho Mendoza", cancion: "Mary's Bolivar", link: "https://open.spotify.com/track/4Gt7ky2HGZyR77CRh3o2ZQ?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Matilde"], artista: "Alfredo Gutierrez", cancion: "Matilde Lina", link: "https://open.spotify.com/track/5zDVwZMQ1Z5zwok9AINxWv?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Maye"], artista: "Diomedes Diaz, Ivan Zuleta", cancion: "Me Mata Mi Maye", link: "https://open.spotify.com/track/5tFwvgSGvih3t3I3FTPxSt?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Mercedes"], artista: "El Doble Poder", cancion: "Mercedes", link: "https://open.spotify.com/track/4JpL6weNDg8IayYDyaXZuI?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Mercedes"], artista: "Ivan Villazon, Saul Lallemand", cancion: "Mercedes", link: "https://open.spotify.com/track/0FvVJjLiy5N13cuZ7jNTzx?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Mercedes"], artista: "Ivan Villazon, Jose Maria Chema Ramos", cancion: "Mercedes", link: "https://open.spotify.com/track/4sVuReIdgps2BFMU5czzqC?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Milena"], artista: "Lisandro Meza", cancion: "Milena", link: "https://open.spotify.com/track/6YOzXdYK6dcWr2LvcrgOYE?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Myriam"], artista: "Diomedes Diaz, El Cocha Molina", cancion: "Myriam", link: "https://open.spotify.com/track/6tljGo1QKZ6RlvffHy7RGn?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Natalia"], artista: "Los Diablitos", cancion: "Natalia", link: "https://open.spotify.com/track/52I7jZuRfsvSH7fZH21LTA?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Norfidia"], artista: "Tuto Uhia, Gustavo García", cancion: "Norfidia", link: "https://open.spotify.com/track/1JAbwV5gUrxYl8hbfmfIFb?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Orfelina"], artista: "Julio De La Ossa, Rafael Escalona", cancion: "Orfelina", link: "https://open.spotify.com/track/2RqQ5RR2PnPib1awEHa7da?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Palmina"], artista: "Diomedes Diaz, El Cocha Molina", cancion: "Palmina", link: "https://open.spotify.com/track/1pRLJjoAEvvjSOuxlCk50H?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Rebeca"], artista: "Binomio de Oro", cancion: "Rebeca", link: "https://open.spotify.com/track/6HivGmBEUa0CBgvNry7YPC?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Riña"], artista: "Los Betos, Beto Villa, Beto Zabaleta", cancion: "Riña", link: "https://open.spotify.com/track/5UrxQYXFM6ZCrlg9UIpy8i?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Rosa"], artista: "Jorge Oñate", cancion: "Rosa Angelina", link: "https://open.spotify.com/track/6MyVmvHu2EbV2ONoqQHrES?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Rosa"], artista: "Los Hermanos Zuleta", cancion: "Rosa Leonor", link: "https://open.spotify.com/track/2S2sPmshrHbLtiXnFe0kR3?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Rosa"], artista: "Alfonso Zuleta, Emiliano Zuleta", cancion: "Rosa Maria", link: "https://open.spotify.com/track/5bFkNF1KarEZy8oIoVIRN6?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Rosalba", "Rosalbita"], artista: "Jorge Oñate", cancion: "Rosalbita", link: "https://open.spotify.com/track/2u5dh9AHUL7mKJ3oqG9QAe?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Rosa", "Rosita"], artista: "Diomedes Diaz, Colacho Mendoza", cancion: "Rosita", link: "https://open.spotify.com/track/6mUQH5lZz0Rs9zOiu2yW0t?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Simona"], artista: "Jorge Oñate, Colacho Mendoza", cancion: "Simona", link: "https://open.spotify.com/track/2beUBUw0QOkFsCx30kD3z3?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Sofía", "Sophia"], artista: "Alejandro Duran", cancion: "Sofía", link: "https://open.spotify.com/track/36SOeGFfsBHp9aEr4guc9L?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Sorayita"], artista: "Los Hermanos Zuleta", cancion: "Sorayita", link: "https://open.spotify.com/track/0Jdq3NKy9TDFhCMQ1OS9wt?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Teresa", "Teresita"], artista: "Diomedes Diaz, Naffer Durán", cancion: "Teresita", link: "https://open.spotify.com/track/7DM55Ye46DCcjXtmqpLO7K?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Vanessa"], artista: "Jose Luis Carrascal", cancion: "Vanessa", link: "https://open.spotify.com/track/2y1XWk8FwuH7d3Z5TsVbNP?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Veronica"], artista: "Binomio de Oro de América", cancion: "Veronica", link: "https://open.spotify.com/track/6lNS0X705ifXM4qcraEHXb?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Yolanda"], artista: "Héctor Zuleta, Adanies Diaz", cancion: "Yolanda", link: "https://open.spotify.com/track/7i4FcgTytgvhPRAqUa8Ske?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Zoila"], artista: "Ismael Rudas, Daniel Celedón", cancion: "Zoila", link: "https://open.spotify.com/track/1T7eXfwloUvoyf1zVGz7Mt?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" },
  { nombres: ["Zunilda"], artista: "Diomedes Diaz, Colacho Mendoza", cancion: "Zunilda", link: "https://open.spotify.com/track/6b3sbmw554KMfnKMIx6Mlm?context=spotify%3Aplaylist%3A3C2MhlekGUUINthxv0vhsl" }
];

// Normaliza texto (quita acentos y pasa a minúsculas)
function normalizarTexto(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

const input = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

// Evento de búsqueda
input.addEventListener("input", () => {
  const query = normalizarTexto(input.value.trim());
  resultsDiv.innerHTML = "";

  if (query.length === 0) return;

  const resultados = canciones.filter(c =>
    c.nombres.some(nombre => normalizarTexto(nombre).startsWith(query))
  );

  if (resultados.length === 0) {
    resultsDiv.innerHTML = `
      <div class="result">
        <div class="result-header">
          <strong class="lato-bold color-1">Sin coincidencias</strong>
        </div>
        <div class="result-body">
          <p>No encontramos coincidencias 😢</p>
        </div>
      </div>
    `;
    return;
  }

  resultados.forEach(r => {
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result");

    resultDiv.innerHTML = `
      <div class="result-header">
        <p><strong class="lato-bold color-1">Coincidencia encontrada:</strong></p>
        <p>${r.nombres.join(", ")}</p>
      </div>
      <div class="result-body">
        <p class="result-body-cancion"><strong class="lato-bold color-1">Canción:</strong></p>
        <p class="lato-regular result-body-mar-bo">${r.cancion}</p>
        <p class="result-body-artista"><strong class="lato-bold color-1">Artista:</strong></p>
        <p class="lato-regular result-body-mar-bo">${r.artista}</p>        
      </div>
      <div class="result-footer">
        <a href="${r.link}" target="_blank" class="spotify-btn lato-regular" title="Escuchar ${r.cancion} en Spotify">Escuchar en Spotify</a>
        <p class="lato-regular result-body-mar-bo txt-small">*Abrir desde la app para ir directo a la playlist</p>  
      </div>
    `;

    resultsDiv.appendChild(resultDiv);
  });
});