import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
     Discover and share prompts
    <br className="max-md:hidden"/>
    <span className="orange_gradient text-center">
        AI Powered Prompt Generator
    </span>
    </h1>
    <p className="desc text-center">
        Promptia is a platform that helps you discover and share prompts for your creative projects. 
        Our AI powered prompt generator helps you get started with your next project. 
        Join our community today and start creating!
    </p>
    <Feed />
    </section>
  )
}

export default Home;