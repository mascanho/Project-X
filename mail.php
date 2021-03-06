
<!DOCTYPE HTML>

<html>

<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-8W5X34T7XS"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-8W5X34T7XS');
    </script>

    <title>About - Blackcat Marketing Solutions</title>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="/images/favicon/android-chrome-192x192.png" type="image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <meta name="description" content="Photography, Videography and Marketing Solutions for Everyday Businesses and People">
    <meta name="keywords" content="Photograhpy, Videography, Marketing, Real Estate, Photo, Video, Presentation, Artists, Bands, Homestaging, SME,  marketing">
    <link rel="stylesheet" href="assets/css/main.css" />
    <link rel="stylesheet" href="assets/css/acordion.css">
    <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
</head>

<body class="">

    <!-- Page Wrapper -->
    <div id="page-wrapper">

        <!-- Header -->
        <header id="header" class="clear">

            <h1><a href="index.html">Blackcat Marketing</a></h1>
            <nav>
                <a href="#menu"></a>
            </nav>
        </header>

        <!-- Menu -->
        <nav id="menu">
            <div class="inner container">
                <h2>Menu</h2>
                <ul class="links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <!-- <li><a href="ethos.html">Ethos</a></li>  -->
                    <li><a href="services.html">Services</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li><a href="contact.html">Contact</a></li>


                </ul>
                <a href="#" class="close">Close</a>
            </div>
        </nav>


        <div class="sticky">
    
          <ul>
              
              <li><a href="https://www.facebook.com/blackcatmks" target="_blank" ><i class="fab fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="https://www.instagram.com/blackcatmkofficial/ "target="_blank"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
              <li><a href="https://www.youtube.com/channel/UCczj54zG-LBXFuXKGJjKU8A" target="_blank"><i class="fab fa-youtube" aria-hidden="true"></i></a></li>
              <li><a href="mailto:hello@blackcatmk.com"><i class="fas fa-envelope" aria-hidden="true"></i></a></li>
            </ul>
  
  
        </div>



        <!-- Wrapper -->
        <section id="wrapper" class="" style="">
            <header>

                <!-- INICIO BOLHA -->

                <section class="bubble">

                    <div class="rad2"><img src="images/b-logo.png" alt="" srcset=""></div>
                    <div class="line2"></div>
                    <div class="box2">
                        <p>“Marketing’s job is never done. It’s about perpetual motion. We must continue to innovate every day.”</p>
                    </div>

                    <div class="div modal-bg">
                        <div class="div modal">

                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates consectetur aliquam neque! Exercitationem sequi ad obcaecati totam enim voluptatem fugiat commodi eligendi harum neque id fugit quam, dolorum optio ipsam.</p>
                            <span class="modal-close">X</span>
                        </div>


                    </div>

                </section>

                <!-- FIM DA BOLHA  -->
            </header>

            <section class="inner" id="mail">
               <div class="">
                   <h3 class="moto3"></h3>
                   <h5>Our cats are working hard to get back to you.</h5>
                   
               <?php
$name = $_POST['name'];
$email = $_POST['email'];
// $phone = $_POST['phone'];
$website = $_POST['website'];
$priority = $_POST['priority'];
// $type = $_POST['type'];
$message = $_POST['message'];
$formcontent=" Name: $name  \n Website: $website \n Found us on: $priority \n Type: $type \n Message: $message";
$recipient = "guerreiro.marco@sapo.pt,mascanho@sapo.pt,berbodhisattva@hotmail.com";
$subject = "Blackcat Marketing New Contact Form";
$mailheader = "New Form Submission From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "<a href='index.html' style='text-decoration:none;color:#ff0099;font-weight:500;'> Return Home</a>";
?>
               </div>
            </section>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>


 <!-- Footer -->
 <section id="footer" >
  <div class="inner inner-ipad">
      

      <ul class="copyright">
        

          <li>Made with &nbsp;<i class="fa fa-heart heart"></i> &nbsp;by Blackcat Marketing</li>
          <li> <a href="tc.html" target="_blank" rel="noopener noreferrer">T&Cs</a></li>
          <li> <a href="tc.html" target="_blank" rel="noopener noreferrer">Privacy</a> </li>
         

          <!-- <div class="lang">
              <div id="pt-active" class="portuguese active">
                  <a href="#">PT</a>
              </div>


              <div id="en-active" class="english active">
                  <p>EN</p>
              </div>
          </div> -->
          </li>
      </ul>
  
    
       
   

   
  </div>
</section>
</div>


    <!-- Scripts -->
    <script src="assets/js/jquery.min.js "></script>
    <script src="assets/js/jquery.scrollex.min.js "></script>
    <script src="assets/js/browser.min.js "></script>
    <script src="assets/js/breakpoints.min.js "></script>
    <script src="assets/js/util.js "></script>
    <script src="assets/js/main.js "></script>
    <script src="assets/js/gallery.js "></script>
    <script src="assets/js/misc.js "></script>
    <script src="assets/js/acordion.js"></script>

    <script>
        const output2 = document.querySelector('.moto3');
        const text2 = 'Wohoo, we got your message!';

        const ResetState = (event) => {
            output2.innerHTML = '';
            DisplayText(text2);
        };

        const DisplayText = (line) => {
            let charPosition2 = 0;
            const waitForMilliseconds2 = 25;

            setInterval(() => {
                if (charPosition2 < line.length) {
                    output2.innerHTML += line.charAt(charPosition2);
                    charPosition2++;
                }
            }, waitForMilliseconds2);
        };

        const resetButton2 = document.querySelector('.moto3');

        DisplayText(text2);
    </script>

     <!-- Start of HubSpot Embed Code -->
  <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/9376538.js"></script>
  <!-- End of HubSpot Embed Code -->

</body>

</html>