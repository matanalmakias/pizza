import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import Newsletter1 from "@/components/sections/newsletter/Newsletter1";
import { Link } from "react-router-dom";import React from "react";

export default function Home() {
    return (
        <>
            <Layout
                pageId={"blog-page"}
                activePage={"Blog Post"}
                pageTitle={"Single Blog Post"}
                headerStyle={1}
                footerStyle={1}
            >

                <section id="single-post" className="wide-100 single-post-section division">
                    <div className="container">
                        {/* SINGLE POST CONTENT */}
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="single-post-wrapper">
                                    {/* SINGLE POST TITLE */}
                                    <div className="single-post-title">
                                        {/* TITLE */}
                                        <h2 className="h2-xs">Aliquam augue purus, luctus neque etiam an ipsum and neque</h2>
                                    </div>	{/* END SINGLE POST TITLE */}
                                    {/* BLOG POST TEXT */}
                                    <div className="single-post-txt">
                                        {/* Text */}
                                        <p>Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue tempor a gravida donec ipsum
                                            aporta justo integer at odio velna. Maecenas gravida porttitor nunc, quis vehicula magna luctus
                                            tempor. Quisque vel laoreet turpis. An augue viverra a augue eget, dictum tempor diam. Sed pulvinar
                                            donec ociis et magnis sapien imperdiet dui varius placerat imperdiet dui varius viverra augue egestas
                                            luctus donec purus and blandit
                                        </p>
                                    </div>
                                    {/* BLOG POST INNER IMAGE */}
                                    <div className="post-inner-img">
                                        <img className="img-fluid" src="/images/blog/img-08.jpg" alt="blog-post-image" />
                                    </div>
                                    {/* BLOG POST TEXT */}
                                    <div className="single-post-txt">
                                        {/* Text */}
                                        <p>Aliqum  mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue
                                            magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien etiam sapien sagittis congue
                                            tempor a gravida donec enim ipsum porta justo integer at odio velna. Maecenas gravida porttitor nunc,
                                            quis vehicula magna at luctus tempor. Quisque vel laoreet turpis. Urna augue, viverra a augue eget,
                                            dictum tempor diam. Sed pulvinar consectetur nibh, vel imperdiet dui varius viverra. Pellentesque ac
                                            massa lorem fusce eu cursus fusce
                                        </p>
                                        <p>Donec dolor suscipit magna vehicula impedit ligula risus. Mauris donec ociis et magnis sapien etiam
                                            sapien sem sagittis congue tempor gravida porttitor nunc, quis vehicula magna. Placerat varius consectetur
                                            nibh, vel imperdiet dui varius viverra donec ociis et magnis
                                        </p>
                                        <p>Cubilia laoreet augue egestas cursus magna nihil impedit ligula risus. Mauris donec ociis  et magnis sapien
                                            etiam sapien rutrum tempor mullam blandit tempor sapien and gravida Maecenas gravida porttitor nunc, quis
                                            vehicula magna luctus tempor. Quisque laoreet turpis urna augue, viverra a augue eget, dictum tempor diam.
                                        </p>
                                        {/* Small Title */}
                                        <h5 className="h5-md mt-50">Praesent aliquet tempus<br />
                                            (tempor gravida ipsum as an example)
                                        </h5>
                                        {/* Text */}
                                        <p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus
                                            efficitur ipsum primis in cubilia laoreet augue egestas luctus donec diam. Curabitur ac dapibus
                                            libero. Mauris donec ociis a neque. Phasellus blandit tristique justo ut aliquam. Aliquam vitae
                                            molestie nunc sapien justo, aliquet non molestie augue, venenatis nec purus. Aliquam eget lacinia
                                            elit. Augue tincidunt tincidunt massa
                                        </p>
                                        {/* List */}
                                        <ul className="txt-list">
                                            <li className="list-item">
                                                <p>Donec dolor magna, suscipit in magna dignissim, porttitor hendrerit diam. Nunc gravida
                                                    ultrices felis eget faucibus. Praesent aliquet tempus, blandit posuere ligula varius
                                                </p>
                                            </li>
                                            <li className="list-item">
                                                <p>Fringilla risus nec, luctus mauris orci auctor euismod purus pretium purus pretium ligula
                                                    rutrum tempor mullam blandit tempor sapien and gravida donec ipsum at justo
                                                </p>
                                            </li>
                                            <li className="list-item">
                                                <p>Quaerat sodales sapien undo euismod purus blandit velna vitae auctor a congue magna tempor
                                                    sapien eget gravida laoreet turpis urna augue, viverra a augue eget, dictum tempor diam
                                                    pulvinar consectetur purus efficitur ipsum primis in cubilia laoreet augue donec
                                                </p>
                                            </li>
                                        </ul>
                                        {/* BLOG POST INNER IMAGES */}
                                        <div className="post-inner-img">
                                            <div className="row">
                                                {/* Inner Image #1 */}
                                                <div className="col-md-6 top-img blog-post-img">
                                                    {/* Image */}
                                                    <img className="img-fluid" src="/images/blog/img-01.jpg" alt="blog-post-image" />
                                                    {/* Text */}
                                                    <p className="p-sm grey-color">Maecenas gravida porttitor nunc, quis vehicula magna</p>
                                                </div>
                                                {/* Inner Image #2 */}
                                                <div className="col-md-6 blog-post-img">
                                                    {/* Image */}
                                                    <img className="img-fluid" src="/images/blog/img-05.jpg" alt="blog-post-image" />
                                                    {/* Text */}
                                                    <p className="p-sm grey-color">Gravida porttitor nunc, quis vehicula tempor</p>
                                                </div>
                                            </div>
                                        </div>	{/* END INNER IMAGES */}
                                        {/* Text */}
                                        <p>Nulla tincidunt volutpat tincidunt. Pellentesque habitant morbi tristique senectus et netus and
                                            malesuada famesa augue suscipit, luctus at neque purus neque dolor primis. Nemo sodales ipsam
                                            egestas volute turpis a dolores aliquam quaerat sodales sapien congue augue eget gravida laoreet
                                            turpis urna augue, viverra a augue eget, dictum dictum tempor diam. Sed pulvinar consectetur and
                                            placerat imperdiet
                                        </p>
                                        {/* List */}
                                        <ul className="txt-list">
                                            <li className="list-item">
                                                <p>Donec dolor magna, suscipit in magna dignissim, porttitor hendrerit diam. Nunc gravida
                                                    ultrices felis eget faucibus. Praesent aliquet tempus, blandit posuere ligula varius
                                                </p>
                                            </li>
                                            <li className="list-item">
                                                <p>Fringilla risus nec, luctus mauris orci auctor euismod purus pretium purus pretium ligula
                                                    rutrum tempor mullam blandit tempor sapien and gravida donec ipsum at justo
                                                </p>
                                            </li>
                                        </ul>
                                        {/* Small Title */}
                                        <h5 className="h5-md">Egestas volutpat egestas</h5>
                                        {/* Text */}
                                        <p>In at mauris vel nisl convallis porta at vitae dui. Nam lacus ligula, vulputate molestie bibendum
                                            quis, aliquet elementum massa. Vestibulum ut sagittis odio. Ac massa lorem. Fusce eu cursus est.
                                            Fusce non nulla vitae massa placerat vulputate vel a purus. Aliqum  mullam blandit tempor sapien
                                            gravida donec
                                        </p>
                                        {/* Text */}
                                        <p>Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque vel laoreet turpis
                                            urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur nibh, vel imperdiet
                                            dui varius viverra. Sapien justo massa lorem. Fusce eu cursus non nulla vitae massa placerat purus.
                                            Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus
                                            efficitur ipsum primis in cubilia laoreet augue egestas luctus donec
                                        </p>
                                        {/* BLOG POST INNER IMAGE */}
                                        <div className="post-inner-img">
                                            <div className="video-preview text-center">
                                                <a className="video-popup1">  {/* Change the link HERE!!! */}
                                                    {/* Play Icon */}
                                                    <div className="video-btn bg-red">
                                                        <VideoPopup/>
                                                    </div>
                                                    {/* Preview Image */}
                                                    <img className="img-fluid" src="/images/blog/img-11.jpg" alt="blog-post-image" />
                                                </a>
                                            </div>	{/* END VIDEO LINK */}
                                        </div>
                                        {/* Small Title */}
                                        <h5 className="h5-md">Vitae massa placerat vulputate</h5>
                                        {/* Text */}
                                        <p>Nullam non scelerisque lectus. In at mauris vel nisl convallis porta at vitae dui. Nam lacus ligula,
                                            vulputate molestie bibendum quis, aliquet elementum massa. Vestibulum ut sagittis odio. Ac massa lorem.
                                            Fusce eu cursus est. Fusce non nulla vitae massa placerat vulputate vel a purus. Aliqum mullam blandit
                                            tempor
                                        </p>
                                        {/* Text */}
                                        <p><span className="txt-500">Aliqum  mullam blandit tempor sapien gravida donec ipsum</span>, at porta
                                            justo. Velna vitae auctor congue magna impedit ligula risus. Mauris donec ociis et magnis sapien
                                            etiam sapien sem sagittis congue tempor gravida donec integer
                                        </p>
                                        {/* Text */}
                                        <p><span className="txt-500">Maecenas gravida porttitor nunc, quis vehicula</span> magna luctus tempor.
                                            Quisque vel laoreet turpis urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar
                                            consectetur vel imperdiet varius viverra. Pellentesque undo massa lorem. Fusce eu cursus non nulla
                                            vitae massa placerat purus bibendum quis, aliquet
                                        </p>
                                        {/* Small Title */}
                                        <h5 className="h5-md">Cursus non nulla vitae massa</h5>
                                        {/* List */}
                                        <ul className="txt-list">
                                            <li className="list-item">
                                                <p>Donec dolor magna, suscipit in magna dignissim, porttitor hendrerit diam. Gravida ultrices
                                                    felis faucibus aliquet undo tempus, blandit posuere ligula varius congue cursus nulla vitae
                                                    massa placerat vulputate tempor sapien gravida
                                                </p>
                                            </li>
                                            <li className="list-item">
                                                <p>Aliquam varius neque commodo purus  tempor sapien gravida vulputate pharetra bibendum
                                                    in ante ornare
                                                </p>
                                            </li>
                                            <li className="list-item">
                                                <p>Morbi dui lectus, lobortis felis nec, suscipit imperdiet sapien semper ultrices. Nulla
                                                    tincidunt volutpat and tincidunt. Habitant morbi tristique senectus et netus malesuada
                                                    famesa augue suscipit, luctus neque purus ipsum
                                                </p>
                                            </li>
                                        </ul>
                                        {/* Text */}
                                        <p>Curabitur ac dapibus libero quisque eu tristique neque sellus blandit tristique justo ut aliquam.
                                            Aliquam vitae at molestie nunc sapien justo, aliquet non molestie sed, venenatis nec purus. Aliquam
                                            eget lacinia tincidunt massa justo. Quisque vel laoreet turpis. Urna augue, viverra a augue eget,
                                            dictum tempor diam. Sed pulvinar consectetur nibh, vel imperdiet varius viverra. Pellentesque ac
                                            massa lorem. Fusce eu cursus est. Fusce non nulla vitae massa placerat bulum tincidunt tincidunt
                                            massa, et porttitor justo viverra a augue eget
                                        </p>
                                    </div>	{/* END BLOG POST TEXT */}
                                    {/* SINGLE POST SHARE LINKS */}
                                    <div className="row post-share-links d-flex align-items-center">
                                        {/* POST TAGS */}
                                        <div className="col-md-9 col-xl-8 post-tags-list">
                                            <span><Link href="#">Life</Link></span>
                                            <span><Link href="#">Ideas</Link></span>
                                            <span><Link href="#">Story</Link></span>
                                            <span><Link href="#">Pizza</Link></span>
                                        </div>
                                        {/* POST SHARE ICONS */}
                                        <div className="col-md-3 col-xl-4 post-share-list text-right">
                                            <ul className="share-social-icons text-center clearfix">
                                                <li><Link href="#" className="share-ico ico-facebook"><i className="fab fa-facebook-square" /></Link></li>
                                                <li><Link href="#" className="share-ico ico-twitter"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#" className="share-ico ico-like"><i className="far fa-bookmark" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>	{/* END SINGLE POST SHARE */}
                                </div>
                            </div>
                        </div>	{/* END SINGLE POST CONTENT */}
                    </div>     {/* End container */}
                </section>	{/* END SINGLE POST */}
                {/* OTHER POSTS
			============================================= */}
                <section id="other-posts" className="bg-lightgrey other-posts division">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div id="op-row" className="row d-flex align-items-center">
                                    {/* Previous Post */}
                                    <div className="col-md-5">
                                        <div className="prev-post mb-30">
                                            <h6 className="h6-xl">Previous Post</h6>
                                            <Link href="/single-post">Congue bulum Testo tincidunt at purus pretium magnis</Link>
                                        </div>
                                    </div>
                                    {/* All Posts */}
                                    <div className="col-md-2 text-center">
                                        <div className="all-posts mb-30">
                                            <Link href="/blog-listing"><i className="fas fa-th-large" /></Link>
                                        </div>
                                    </div>
                                    {/* Next Post */}
                                    <div className="col-md-5 text-right">
                                        <div className="next-post mb-30">
                                            <h6 className="h6-xl">Next Post</h6>
                                            <Link href="/single-post">12 neque dolor primis a libero tempus augue tempor</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>	  {/* End row */}
                    </div>
                </section>	{/* END OTHER POSTS */}
                {/* POST COMMENTS
			============================================= */}
                <section id="post-comments" className="wide-80 post-comments division">
                    <div className="container">
                        <div className="row">
                            {/* COMMENTS WRAPPER */}
                            <div className="col-lg-10 offset-lg-1">
                                <div className="comments-wrapper">
                                    {/* Title */}
                                    <h5 className="h5-lg">4 Comments</h5>
                                    {/* COMMENT #1 */}
                                    <div className="media">
                                        {/* Comment-1 Avatar */}
                                        <img className="mr-3" src="/images/post-author-1.jpg" alt="comment-avatar" />
                                        <div className="media-body">
                                            {/* Comment-1 Meta */}
                                            <div className="comment-meta">
                                                <h6 className="h6-md mt-0">Thomas</h6>
                                                <span className="comment-date">5 days ago - </span>
                                                <span className="btn-reply"><Link href="#leave-comment" className="internal-link"><i className="fas fa-reply" /> Reply</Link></span>
                                            </div>
                                            {/* Comment-1 Text */}
                                            <p className="mb-40">Etiam sapien sem magna at vitae pulvinar congue augue egestas pretium neque viverra
                                                suscipit egestas magna porta ratione, mollis risus lectus porta rutrum arcu aenean primis in augue
                                                luctus neque purus ipsum neque dolor primis purus efficitur ipsum primis in cubilia laoreet augue
                                            </p>
                                            <hr />
                                            {/* COMMENT #2 */}
                                            <div className="media">
                                                {/* Comment-2 Avatar */}
                                                <Link href="#" className="pr-3">
                                                    <img src="/images/post-author-2.jpg" alt="comment-avatar" />
                                                </Link>
                                                <div className="media-body">
                                                    {/* Comment-2 Meta */}
                                                    <div className="comment-meta">
                                                        <h6 className="h6-md mt-0">David Clark</h6>
                                                        <span className="comment-date">6 days ago - </span>
                                                        <span className="btn-reply"><Link href="#leave-comment" className="internal-link"><i className="fas fa-reply" /> Reply</Link></span>
                                                    </div>
                                                    {/* Comment-2 Text */}
                                                    <p>Etiam sapien sem magna at vitae pulvinar congue augue egestas pretium neque and viverra
                                                        suscipit porta ratione, mollis risus lectus porta aliquet lorem purus mollis
                                                    </p>
                                                </div>
                                            </div>	{/* END COMMENT #2 */}
                                        </div>
                                    </div>	{/* END COMMENT #1 */}
                                    <hr />
                                    {/* COMMENT #3 */}
                                    <div className="media">
                                        {/* Comment-4 Avatar */}
                                        <img className="mr-3" src="/images/post-author-3.jpg" alt="comment-avatar" />
                                        <div className="media-body">
                                            {/* Comment-4 Meta */}
                                            <div className="comment-meta">
                                                <h6 className="h6-md mt-0">Jasmine</h6>
                                                <span className="comment-date">13 days ago - </span>
                                                <span className="btn-reply"><Link href="#leave-comment" className="internal-link"><i className="fas fa-reply" /> Reply</Link></span>
                                            </div>
                                            {/* Comment-4 Text */}
                                            <p>Porta ratione, mollis risus lectus porta rutrum arcu aenean primis in augue luctus neque purus
                                                ipsum neque dolor primis libero tempus, tempor posuere ligula varius impedit enim tempor vitae
                                                pulvinar at congue augue egestas. Praesent aliquet lorem purus, quis mollis nisi laoreet
                                            </p>
                                        </div>
                                    </div>	{/* END COMMENT #3 */}
                                    <hr />
                                    {/* COMMENT #4 */}
                                    <div className="media">
                                        {/* Comment-4 Avatar */}
                                        <img className="mr-3" src="/images/post-author-4.jpg" alt="comment-avatar" />
                                        <div className="media-body">
                                            {/* Comment-4 Meta */}
                                            <div className="comment-meta">
                                                <h6 className="h6-md mt-0">Rady Smith</h6>
                                                <span className="comment-date">42 days ago - </span>
                                                <span className="btn-reply"><Link href="#leave-comment" className="internal-link"><i className="fas fa-reply" /> Reply</Link></span>
                                            </div>
                                            {/* Comment-4 Text */}
                                            <p>Etiam sapien sem magna at vitae pulvinar congue augue egestas pretium neque viverra suscipit
                                                egestas magna porta ratione, mollis risus lectus porta rutrum arcu an aenean primis auctor
                                            </p>
                                        </div>
                                    </div>	{/* END COMMENT #4 */}
                                    <hr />
                                    {/* COMMENT FORM */}
                                    <div id="leave-comment">
                                        {/* Title */}
                                        <h5 className="h5-lg">Leave a Comment</h5>
                                        {/* Text */}
                                        <p className="p-sm grey-color">Your email address will not be published. Required fields are marked *</p>
                                        <form name="commentForm" className="row comment-form">
                                            <div className="col-md-12 input-message">
                                                <p>Add Comment *</p>
                                                <textarea className="form-control message" name="message" rows={6} placeholder="Enter Your Comment Here* ..." required defaultValue={""} />
                                            </div>
                                            <div className="col-md-12">
                                                <p>Name*</p>
                                                <input type="text" name="name" className="form-control name" placeholder="Enter Your Name*" required />
                                            </div>
                                            <div className="col-md-12">
                                                <p>Email*</p>
                                                <input type="email" name="email" className="form-control email" placeholder="Enter Your Email*" required />
                                            </div>
                                            {/* Contact Form Button */}
                                            <div className="col-lg-12 form-btn">
                                                <button type="submit" className="btn btn-red tra-red-hover submit">Post Comment</button>
                                            </div>
                                            {/* Contact Form Message */}
                                            <div className="col-md-12 comment-form-msg text-center">
                                                <div className="sending-msg"><span className="loading" /></div>
                                            </div>
                                        </form>
                                    </div>	{/* END COMMENT FORM */}
                                </div>
                            </div>	{/* END COMMENTS WRAPPER */}
                        </div>     {/* End row */}
                    </div>     {/* End container */}
                </section>	{/* END POST COMMENTS */}

                <Newsletter1 />


            </Layout>
        </>
    )
}