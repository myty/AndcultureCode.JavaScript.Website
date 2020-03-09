import React from 'react';
import teacherClassRom from '../../../static/img/case-studies/kids-discover/teacher-classroom.png';
import magazines from '../../../static/img/case-studies/kids-discover/magazines.png';
import phone from '../../../static/img/case-studies/kids-discover/phone.png';
import teacherStudents from '../../../static/img/case-studies/kids-discover/teacher-students.png';
import tabletPencil from '../../../static/img/case-studies/kids-discover/tablet-pencil.png';
import collage from '../../../static/img/case-studies/kids-discover/collage.png';
import dotGrid from '../../../static/img/case-studies/kids-discover/dot-grid.png';
import studentHomework from '../../../static/img/case-studies/kids-discover/student-homework.png';
import feedLockup from '../../../static/img/case-studies/kids-discover/feed-lockup.png';


const KidsDiscover = class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <div className = "m-case-study-page-content__image-container">
                    <div className = "m-case-study-page-content__image">
                        <img src = { teacherClassRom } />
                    </div>
                </div>
                <div className = "o-rhythm__container">
                    <div className = "m-case-study-page-content__copy-section">
                        <header className = "-push-one">so what was broken?</header>
                        <div className = "o-rhythm__row">
                        <div className = "content__copy">
                            <p>In a word, magazines. None of the content was digital — it was all print. Kids Discover saw that the way to expand reach was through online subscriptions and content syndication. For obvious reasons, the current format was not going to support these growth opportunities. Kids Discover needed a partner to do a heavy lift — take all this offline content, organize it, architect both front- and back-end platforms and design user-friendly interfaces and then build it to support new business models in a scalable way. <span className = "easter-egg__right">Easy peasy.</span></p>
                        </div>
                        <div className = "content__easter-egg easter-egg">Not really. But we love a good challenge.</div>
                        </div>
                    </div>
                </div>
                <div className = "m-case-study-page-content__image-container">
                    <div className = "m-case-study-page-content__image">
                        <img src = { magazines } />
                    </div>
                </div>
                <div className = "o-rhythm__container">
                    <div className = "m-case-study-page-content__copy-section">
                        <h6 className = "content__header -mobile-only">Research</h6>
                        <header className = "-push-three">okay, so how did andculture tackle the problem?</header>
                        <div className = "o-rhythm__row">
                            <h6 className = "content__header -desktop-only">Research</h6>
                            <div className = "content__copy">
                                <p>To dig into the education space, we held two teacher roundtable discussions, attended industry-related conferences, interviewed educational consultants and surveyed teachers across the country. We focus this qualitative and quantitative research on current and future states of education, access to technology in the modern classroom and other educational trends.</p>
                                <p>Once business needs were defined, we kicked off a second phase of research in 10 schools throuout the Northeastern U.S. Through observations and interviews, we learned how supplemental content is applied in the classroom and how students and teachers used and interacted with technology. With all of these findings, we were able to make informed product recommendations and start to write rules (e.g., “must make reading an active process”)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "m-case-study-page-content__section">
                    <div className = "o-rhythm__row">
                        <div className = "kd-image -phone">
                            <img src = { phone } />
                        </div>
                        <div className = "kd-image -teachers-students">
                            <img src = { teacherStudents } />
                        </div>
                    </div>
                </div>
                <div className = "o-rhythm__container">
                    <div className = "m-case-study-page-content__copy-section">
                        <h6 className = "content__header -mobile-only">Takeaway</h6>
                        <header className = "-push-three">students needed to be at the center.</header>
                        <div className = "o-rhythm__row">
                            <h6 className = "content__header -desktop-only">Takeaway</h6>
                            <div className = "content__copy">
                                <p>We found that student research is a pillar in the modern classroom, and teachers were the gatekeepers in terms of accessing the K-12 market. The way teachers secured technology resources — both devices and software — varied greatly by school, but, clearly, teachers were the drivers. We needed to figure out how to target teachers individually and support them in sourcing and paying for our product, in order to drive adoption. Additionally, we needed to support a growing homeschooling population. We had to confirm that a student-centric version made sense to address both teachers and homeschoolers, in terms of user acquisition, value proposition and pricing.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "m-case-study-page-content__image-container -kd-gradient">
                    <div className = "m-case-study-page-content__image">
                        <img src = { tabletPencil } />
                    </div>
                </div>
                <div className = "o-rhythm__container">
                    <div className = "m-case-study-page-content__copy-section">
                        <h6 className = "content__header -mobile-only">Synthesis</h6>
                        <header className = "-push-three">turning data into a plan</header>
                        <div className = "o-rhythm__row">
                        <h6 className = "content__header -desktop-only">Synthesis</h6>
                        <div className = "content__copy">
                            <p>We collected and visualized all of our research findings (also known as “the fun part”). Drawing on this consolidated data, we wireframed VIP screens of the platform and worked out user flows for each audience.</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className = "m-case-study-page-content__image-container">
                    <div className = "m-case-study-page-content__image">
                        <img src = { collage } />
                    </div>
                </div>
                <div className = "o-rhythm__container">
                    <div className = "m-case-study-page-content__copy-section">
                        <h6 className = "content__header -mobile-only">design & development</h6>
                        <header className = "-push-three">bringing magazines — and learning — to life</header>
                        <div className = "o-rhythm__row">
                            <h6 className = "content__header -desktop-only">design & development</h6>
                            <div className = "content__copy">
                                <p>At last, we were ready to design and develop the Kids Discover Online product from the ground up. In order to design a product that stayed true to Kids Discover print experience, we converted each magazine into a “unit” and each magazine spread into a “topic.” Using a custom (and super intuitive, of course) content management system, Kids Discover is able to create pages using its print content and assets. The back-end is configured to allow for three Lexile® levels for each content block, in an effort to meet kids where they are.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "m-case-study-page-content__section">
                    <div className = "o-rhythm__row">
                        <div className = "kd-image -dot-grid">
                            <img src = { dotGrid } />
                        </div>
                        <div className = "kd-image -student-homework">
                            <img src = { studentHomework } />
                        </div>
                        <div className = "kd-image -feed-lockup">
                            <img src = { feedLockup } />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default KidsDiscover;
