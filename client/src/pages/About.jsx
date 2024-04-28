import React from 'react'

function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About BlogInsights
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to BlogInsights! This blogging platform has been created by me, Dhvani Parekh- third year.
              AIML engineering student from Symbiosis Institute of Technology, Pune. I am a passionate developer
              who loves to read and write about technology, coding, and everything that revolves around it, every chance I get.
            </p>

            <p>
              On this website, you'll find weekly articles and tutorials on topics 
              such as web development, software engineering, and programming
              languages. I aim to share valuable insights with respect to latest technology by collaborating with
              industry experts, my mentors and peers urging them to contribute on this platform. I am all about 
              learning and exploring new technologies,  so if you wish to share your insights on this platform, do not hesitate to reach out to me
              and be sure to check back often for new content!
            </p>

            <p>
              I encourage you to leave comments on our posts and engage with other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
