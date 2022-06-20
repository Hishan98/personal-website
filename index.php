<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/png" sizes="450x798" href="assets/img/logo/logo.png">

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>Hishan Kavishka</title>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <link href="assets/css/bootstrap.css" rel="stylesheet" />
    <link href="assets/css/gaia.css" rel="stylesheet" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    <!--     Fonts and icons     -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" type='text/css'>

    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet">

    <link rel="stylesheet" href="assets/packages/fontawesome-free-5.15.4-web/css/all.css" />
    <link rel="stylesheet" href="assets/packages/aos/css/aos.css" />

    <link href="assets/css/custom.css" rel="stylesheet">
    <link href="assets/css/common.css" rel="stylesheet">
    <link href="assets/packages/toastr-master/toastr.css" rel="stylesheet">
</head>

<body>

    <nav class="navbar navbar-default navbar-transparent navbar-fixed-top" color-on-scroll="200">
        <!-- if you want to keep the navbar hidden you can add this class to the navbar "navbar-burger"-->
        <div class="container">
            <div class="navbar-header">
                <button id="menu-toggle" type="button" class="navbar-toggle" data-toggle="collapse" data-target="#example">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar bar1"></span>
                    <span class="icon-bar bar2"></span>
                    <span class="icon-bar bar3"></span>
                </button>
                <img src="assets//img/logo/logoBanner.png" class="navbar-brand nav-logo" alt="logo banner">
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right navbar-uppercase">
                    <li>
                        <a data-scroll="true" data-id="#section-home">Home</a>
                    </li>
                    <li>
                        <a data-scroll="true" data-id="#section-about">ABOUT</a>
                    </li>
                    <li>
                        <a href="projects">PROJECTS</a>
                    </li>
                    <li>
                        <a data-scroll="true" data-id="#section-contact">CONTACT</a>
                    </li>

                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
    </nav>

    <div class="section section-header" id="section-home">
        <div class="parallax">
            <div class="image" style="background-image: radial-gradient(#2F2F2F, #030101);">
            </div>
            <div class="container">
                <div class="content">
                    <div class="row" data-aos="fade-up" data-aos-duration="2800">
                        <div class="col-md-6 textArea">
                            <h3 class="h3-banner">Hello, it’s me</h3>
                            <h1 class="h1-banner">Hishan</h1>
                            <p>I am A hard-working and dedicated individual with experience in working on web-based
                                projects.I am an ambitious, driven individual, and I thrive on challenges and
                                constantly set goals for me, so I have something to strive towards.</p>
                            <a href="" class="btn btn-banner" data-scroll="true" data-id="#section-contact" value="CONTACT ME">CONTACT ME</a>
                        </div>
                        <div class="col-md-6 imageArea">
                            <img src="assets/img/hishan.png" alt="Hishan" class="self-banner-image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a href="" data-scroll="true" data-id="#section-about" class="scroll-arrow hidden-xs hidden-sm">
            <i class="fa fa-angle-down"></i>
        </a>
    </div>

    <div class="section section-get-started" id="section-about">
        <div class="parallax">
            <div class="image bgImage" style="background-image: url('assets/img/background\ 1.jpg')">
            </div>
            <div class="container">
                <div class="row">

                    <div class="col-md-6 py-5" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                        <img src="assets/img/svg/section_1.svg" class="sectionImage" alt="progress svg">
                    </div>
                    <div class="col-md-6 pt-20" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                        <p class="mb-0 mt-3">About My Self !</p>
                        <h1 class="mt-0">I am a <span class="text-yellow">Web Developer</span></h1>
                        <p class="my-2">
                            I'm a full-stack web developer living in Sri Lanka. I spend my days with my hands in many
                            different areas of web development from back-end programming to front-end programming.
                        </p>
                        <p class="my-3">
                            These are my current playgrounds :
                        </p>

                        <p class="progress-title">React Js</p>
                        <div class="progress-container">
                            <div class="progress-level" style="width:70%"></div>
                        </div>

                        <p class="progress-title">Angular Js</p>
                        <div class="progress-container">
                            <div class="progress-level" style="width:75%"></div>
                        </div>

                        <p class="progress-title">Node Js</p>
                        <div class="progress-container">
                            <div class="progress-level" style="width:60%"></div>
                        </div>

                        <p class="progress-title">Pure PHP / Laravel</p>
                        <div class="progress-container">
                            <div class="progress-level" style="width:80%"></div>
                        </div>

                        <p class="progress-title">Wordpress</p>
                        <div class="progress-container">
                            <div class="progress-level" style="width:60%"></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="section section-about" id="section-history">
        <div class="parallax height-auto">
            <div class="bgImage-half" style="background-image: url('assets/img/signature.png')">
            </div>
            <div class="container" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                <div class="row">
                    <div class="col-md-6 col1">
                        <p class="mb-0 mt-3">About My Self !</p>
                        <h1 class="my-0">Some History of My Life,</h1>
                        <h2 class="mb-3 mt-0 w-500">2017 - 2022</h2>

                        <p>
                            I have been working as a freelancer and an employee in an international company for over
                            one and a half years.
                        </p>

                        <div class="mini-image" style="background-image: url('assets/img/hishan.png')"></div>
                        <div class="mini-image-text">
                            <p class="img-title">Date Of Birth</p>
                            <p>13, October 1998</p>
                        </div>
                    </div>
                    <div class="col-md-6 col2">

                        <div class="qualification">
                            <p class="small-year pr-5">2015</p>
                            <p class="small-title">Certificate Course in Computer Science <br>
                                <span class="small-sub-title">( NIBM )</span>
                            </p>
                        </div>
                        <div class="qualification">
                            <p class="small-year pr-5">2017</p>
                            <p class="small-title">Certificate Course in English Language <br>
                                <span class="small-sub-title">( University of Colombo )</span>
                            </p>
                        </div>
                        <div class="qualification">
                            <p class="small-year pr-5">2019</p>
                            <p class="small-title">RedHat Certified System Administrator <br>
                                <span class="small-sub-title">( ID:190-250-332 )</span>
                            </p>
                        </div>
                        <div class="qualification">
                            <p class="small-year pr-5">2021</p>
                            <p class="small-title">BSc.(Hons) in Software Engineering <br>
                                <span class="small-sub-title">( University of Plymouth / NSBM )</span>
                            </p>
                        </div>
                        <div class="qualification">
                            <p class="small-year pb-5 pr-5">2021</p>
                            <p class="small-title">Cagliero Creative Solutions<br>
                                <span class="small-sub-title">I have been working as a web developer for past months,
                                    and I have worked with Angular Js, React Js and Node Js in this
                                    company.</span>
                            </p>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    </div>

    <div class="section section-services" id="section-services">
        <div class="parallax height-auto">
            <div class="container text-center">
                <p class="mb-0 mt-3">My Services</p>
                <h1 class="my-0 pb-4">What You <span class="text-yellow">Can Get</span> From Me?</h1>

                <div class="content-center">
                    <div class="service-card" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                        <img src="assets/img/icons/icons8-magazine-50.png" class="pb-2" alt="magazine-icon">
                        <p class="card-title">BUSINESS WEBSITES</p>
                        <p class="card-details">eCommerce websites are all about performance. Let me develop your
                            eCommerce site to convert attention into dollars.</p>
                    </div>
                    <div class="service-card" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                        <p class="card-details">
                            Are you planning to build a custom personalized website? Reach out to
                            me to discuss your project idea and requirements.
                        </p>
                        <p class="card-title">Personal websites</p>
                        <img src="assets/img/icons/icons8-hand-with-smartphone-50.png" class="pb-2" alt="magazine-icon">

                    </div>
                    <div class="service-card" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                        <img src="assets/img/icons/icons8-synchronize-50.png" class="pb-2" alt="magazine-icon">
                        <p class="card-title">WEBSITE Maintenance</p>
                        <p class="card-details">Let me worry about your applications' performance, SEO, and Google
                            rankings while encouraging traffic growth.</p>
                    </div>
                </div>


            </div>
        </div>
    </div>

    <div class="section section-contact py-0" id="section-contact">
        <div class="parallax height-auto">
            <div class="bgImage" style="background-image: url('assets/img/background\ 2.png')">
            </div>
            <div class="container text-center py-5">
                <p class="mb-0 mt-3">Get in Touch</p>
                <h1 class="my-0 pb-4">Contact <span class="text-yellow">Me</span></h1>

                <div class="contact-form-container">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control inputText" id="exampleInputPassword1" placeholder="Name">
                        </div>
                        <div class="form-group">

                            <input type="email" class="form-control inputText" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <textarea class="form-control inputText textarea-contact" id="exampleFormControlTextarea1" placeholder="Message" rows="5"></textarea>
                        </div>
                        <button type="submit" class="btn btn-submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <footer class="footer footer-big footer-color-black" data-color="black">
        <div class="container">
            <div class="social-container">
                <div class="m-padding">
                    <a href="https://www.facebook.com/hishan.abeysiriwardana" target="_blank">
                        <div class="btn-social"><i class="fab fa-facebook-f"></i></div>
                    </a>
                    <a href="https://www.linkedin.com/in/hishan-abeysiriwardana-93456a174/" target="_blank">
                        <div class="btn-social"><i class="fab fa-linkedin"></i></div>
                    </a>
                    <a href="https://www.instagram.com/hishan_abesiriwardana/?hl=en" target="_blank">
                        <div class="btn-social"><i class="fab fa-instagram"></i></div>
                    </a>
                    <a href="https://github.com/Hishan98" target="_blank">
                        <div class="btn-social"><i class="fab fa-github"></i></div>
                    </a>
                </div>
            </div>
            <div class="copyright">
                ©
                <script>
                    document.write(new Date().getFullYear())
                </script> Hishan Abeysiriwardana, All Rights Recevied
            </div>
        </div>
    </footer>

</body>

<!-- toastr -->
<script src="assets/packages/toastr-master/toastr.min.js"></script>

<!--   core js files    -->
<script src="assets/js/jquery.min.js" type="text/javascript"></script>
<script src="assets/js/bootstrap.js" type="text/javascript"></script>

<!--  js library for devices recognition -->
<script type="text/javascript" src="assets/js/modernizr.js"></script>

<!--  script for google maps   -->
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js"></script>

<!--   file where we handle all the script from the Gaia - Bootstrap Template   -->
<script type="text/javascript" src="assets/js/gaia.js"></script>

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
    AOS.init();
</script>

<script src="assets/js/custom.js"></script>

</html>