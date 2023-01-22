# VA345 Term Project - Ali Parlakçı

Bu projede ekranda 20 tane solucan (düzensiz silindirler) görünüyor. Bu solucanlar bir kare prizma içinde hareket ediyorlar. Her bir solucan aynı görünmez küre etrafında hareket ediyor. Solucanlar 13 tane ve 7 tane olmak üzere iki gruptalar. Her grup diğer grubun tersi yönde hareketine devam ediyor. Her bir solucan, kuyruğu başını yönlendirecek şekilde hareket ediyor. Hareketlerini sürerken, Perlin Noise'un belirttiği üzere hayali kürenin içine girip dışına çıkıyorlar. Her solucanın hareketi kendine has ve benzersiz. Bu şekilde aslında solucanların yaptığı hareket tek başlarına bir "kaos" oluştursa da, bir bütünü oluşturduklarında etraflarında döndükleri şekli, küreyi ortaya çıkarıyorlar.

Solucanlar aynı zamanda parlak yüzeylere sahipler. Parlaklıkları kuyruklarına doğru gidildikçe azalıp matlaşıyor. Parlak ve hareketli baş kısım, hayatın genç dönemlerini simgeliyor. Baş kısmı takip eden mat, daha az göz alıcı ve daha az oynar kısım ise yaşlılığı temsil ediyor. Yaşlılık, gençlik kadar göz almıyor, hareketli değil, ve hayatı, (izlediği yol) gençliğin (başın) önderliğinde ilerliyor.

Solucanların üzerlerine düşen ışıkta ise Hue/Saturation/Lightness sistemi kullanıyor. Hue değeri Perlin Noise tarafından belirleniyor. Daha sonra bu ana renk'te bir yardımcı renk türetiliyor. Yardımcı renk, renk çemberinde ana rengin karşısında duran renk olarak seçiliyor.

---

In this project, there are 20 worms (irregular cylinders) appearing on the screen. These worms are moving inside a square prism. Each worm is moving around an invisible sphere. The worms are divided into two groups, 13 and 7. Each group continues to move in the opposite direction of the other group. Each worm moves in a way that directs its tail to the head. As they move, they enter and exit the imaginary sphere according to Perlin Noise. Each worm's movement is unique and has its own characteristics. This way, even though the movement of the worms alone creates a "chaos", when they form a whole, the shape they create around them brings out the sphere.

The worms also have shiny surfaces. Their shine decreases and becomes duller as they move towards their tail. The shiny and active head represents the young stage of life. The duller and less active part following the head represents old age. Old age is not as eye-catching as youth, is not active, and life moves forward under the leadership of youth (the head).

In the light falling on the worms, the Hue/Saturation/Lightness system is used. The Hue value is determined by Perlin Noise. Then, a secondary color is derived from this main color. The secondary color is selected as the color opposite the main color on the color wheel.
