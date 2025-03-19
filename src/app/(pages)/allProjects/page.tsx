import PortfolioTabs from '@/app/_components/PortfolioTabs'

const page = () => {
  return (
    <section id="portfolio" className="overflow-hidden">
    <div className="container mx-auto py-10 flex flex-col gap-8">
      <h2 className="portfolio-section uppercase text-[24px] md:text-[48px] font-semibold text-center dark:text-transparent dark:bg-clip-text  dark:bg-gradient-to-t dark:from-transparent dark:via-white dark:to-transparent after:bg-black">
        Portfolio
      </h2>
      <div>
        <PortfolioTabs />
      </div>
    </div>
  </section>
  )
}

export default page