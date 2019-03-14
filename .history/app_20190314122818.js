const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
let rawData = fs.readFileSync("data.json");
const data = JSON.parse(rawData);

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('layout', {
        firstname: data.firstname,
        lastname: data.lastname,
        imgURL: data.imageURL,
        title: data.title,
        date: data.dateOfBirth,
        address: data.address,
        nationality: data.nationality,
        email: data.contact[0].email,
        phone: data.contact[1].phone,
        education: data.education[0].school,
        github: data.social[0].github,
        linkedin: data.social[1].linkedin
    });
});

app.get('/data', (req, res) => {
    res.json(data);
});

app.listen(process.env.PORT || 8080);

/*
<!--    
    <div id='divBody'>
        <span class='stuck' id='leftSpan'>
            <div id='person'>
                img(src=imgURL)
                <br>
                h2=firstname + ' ' + lastname
                <br>
                h3=title
                <hr>
                <div id='personInfo'>
                    h5=date
                    h5=address
                    h5=nationality
                </div>
            </div>
            <hr>
            <div id='contact'>
                h4 Contact
                a(href='mailto:'+email)=email
                p='+47 ' + phone
            </div>
            <hr>
            <div id='education'>
                h4 Education
                p=education
            </div>
            <hr>
            <div id='social'>
                h4 Social media
                a(href=github, class="fa fa-github")= ''
                <br>
                a(href=linkedin, class="fa fa-linkedin")= ''
            </div>
            <hr>
        </span>
        <span id='rightSpan'>
            <div id='content'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla urna leo. Nulla pharetra nulla a arcu aliquet lobortis. Quisque magna massa, ullamcorper vitae rhoncus ac, varius eget arcu. In lacinia tortor nec pharetra sollicitudin. Aenean ullamcorper mi eu mi convallis, quis luctus mi tempus. Aenean aliquam sed massa id rutrum. Maecenas faucibus magna in ullamcorper sagittis. Praesent efficitur, tortor a cursus scelerisque, dolor neque sodales elit, sed faucibus nisi massa et mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam non lectus dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam molestie suscipit ultricies. Aenean ut risus in diam euismod cursus viverra in dolor.Maecenas non massa id ipsum ullamcorper finibus. Proin nec vulputate nunc. Nullam a luctus nisi. Vestibulum tempus nisi lorem, quis tincidunt eros iaculis in. Morbi tortor est, auctor at hendrerit et, vestibulum ac lacus. Pellentesque rutrum accumsan sapien. Integer enim turpis, accumsan ut eros non, placerat aliquam erat. Aliquam sagittis sit amet mi viverra laoreet.Nunc dapibus eros ac tincidunt commodo. Vivamus elementum ipsum porttitor risus accumsan, non suscipit odio feugiat. Mauris vitae dolor sit amet odio iaculis pellentesque sit amet non massa. Maecenas gravida tortor in orci scelerisque, id aliquet metus interdum. Aenean ut leo at nulla ultricies suscipit. Maecenas in erat felis. Cras eget turpis nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque vulputate odio at augue tristique, at tincidunt diam venenatis. Etiam sed ipsum et nulla dignissim semper cursus id arcu. Cras vel egestas felis. Aenean cursus, massa ut bibendum tincidunt, dui orci tincidunt est, et convallis nisl dui vel risus. Nam cursus velit a metus feugiat fermentum. Etiam blandit lacus gravida sapien dictum gravida.Praesent quis justo in enim porta elementum. Donec imperdiet non sapien vel rutrum. Pellentesque mattis eu dolor nec vestibulum. Vivamus varius tempor nunc, in facilisis ex bibendum eu. Sed rutrum, sapien in aliquet vehicula, sem diam auctor nisl, quis pretium nunc massa non felis. Maecenas magna turpis, placerat id tristique in, fermentum non diam. Quisque venenatis maximus diam, vestibulum fermentum metus volutpat nec. Nunc vel eros dolor. Maecenas lacinia vehicula mauris, ut mollis massa scelerisque vitae. Etiam at tempor augue, sed ultrices lacus. Etiam pulvinar elit sit amet enim viverra maximus. Integer mollis eget sem eget tincidunt. Aenean sit amet blandit nisl. Quisque sit amet eleifend nisi. Proin at pretium mi, eu condimentum eros.Nullam vitae mi sit amet tortor accumsan aliquam et ac arcu. Aliquam eu suscipit dui, ornare gravida odio. Nam at tempus massa. Maecenas consequat elementum tortor molestie condimentum. Aliquam pharetra eget urna vitae mollis. Maecenas id purus faucibus, interdum tortor quis, ultricies elit. Nulla facilisi. Nulla vel volutpat magna, ut condimentum lectus. Donec vestibulum magna sed ullamcorper egestas. Nam neque libero, cursus non aliquet vel, volutpat id dui. Suspendisse eget rhoncus erat. Praesent maximus fringilla turpis, ac luctus felis iaculis non.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla urna leo. Nulla pharetra nulla a arcu aliquet lobortis. Quisque magna massa, ullamcorper vitae rhoncus ac, varius eget arcu. In lacinia tortor nec pharetra sollicitudin. Aenean ullamcorper mi eu mi convallis, quis luctus mi tempus. Aenean aliquam sed massa id rutrum. Maecenas faucibus magna in ullamcorper sagittis. Praesent efficitur, tortor a cursus scelerisque, dolor neque sodales elit, sed faucibus nisi massa et mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam non lectus dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam molestie suscipit ultricies. Aenean ut risus in diam euismod cursus viverra in dolor.Maecenas non massa id ipsum ullamcorper finibus. Proin nec vulputate nunc. Nullam a luctus nisi. Vestibulum tempus nisi lorem, quis tincidunt eros iaculis in. Morbi tortor est, auctor at hendrerit et, vestibulum ac lacus. Pellentesque rutrum accumsan sapien. Integer enim turpis, accumsan ut eros non, placerat aliquam erat. Aliquam sagittis sit amet mi viverra laoreet.Nunc dapibus eros ac tincidunt commodo. Vivamus elementum ipsum porttitor risus accumsan, non suscipit odio feugiat. Mauris vitae dolor sit amet odio iaculis pellentesque sit amet non massa. Maecenas gravida tortor in orci scelerisque, id aliquet metus interdum. Aenean ut leo at nulla ultricies suscipit. Maecenas in erat felis. Cras eget turpis nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque vulputate odio at augue tristique, at tincidunt diam venenatis. Etiam sed ipsum et nulla dignissim semper cursus id arcu. Cras vel egestas felis. Aenean cursus, massa ut bibendum tincidunt, dui orci tincidunt est, et convallis nisl dui vel risus. Nam cursus velit a metus feugiat fermentum. Etiam blandit lacus gravida sapien dictum gravida.Praesent quis justo in enim porta elementum. Donec imperdiet non sapien vel rutrum. Pellentesque mattis eu dolor nec vestibulum. Vivamus varius tempor nunc, in facilisis ex bibendum eu. Sed rutrum, sapien in aliquet vehicula, sem diam auctor nisl, quis pretium nunc massa non felis. Maecenas magna turpis, placerat id tristique in, fermentum non diam. Quisque venenatis maximus diam, vestibulum fermentum metus volutpat nec. Nunc vel eros dolor. Maecenas lacinia vehicula mauris, ut mollis massa scelerisque vitae. Etiam at tempor augue, sed ultrices lacus. Etiam pulvinar elit sit amet enim viverra maximus. Integer mollis eget sem eget tincidunt. Aenean sit amet blandit nisl. Quisque sit amet eleifend nisi. Proin at pretium mi, eu condimentum eros.Nullam vitae mi sit amet tortor accumsan aliquam et ac arcu. Aliquam eu suscipit dui, ornare gravida odio. Nam at tempus massa. Maecenas consequat elementum tortor molestie condimentum. Aliquam pharetra eget urna vitae mollis. Maecenas id purus faucibus, interdum tortor quis, ultricies elit. Nulla facilisi. Nulla vel volutpat magna, ut condimentum lectus. Donec vestibulum magna sed ullamcorper egestas. Nam neque libero, cursus non aliquet vel, volutpat id dui. Suspendisse eget rhoncus erat. Praesent maximus fringilla turpis, ac luctus felis iaculis non.</p>
            
            </div>
        </span>
    </div>
-->
*/