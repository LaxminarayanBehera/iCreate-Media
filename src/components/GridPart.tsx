import image1 from "/assets/images/gridpart/one.svg";
import image2 from "/assets/images/gridpart/two.svg";
import image3 from "/assets/images/gridpart/three.svg";
import image4 from "/assets/images/gridpart/four.svg";
import image5 from "/assets/images/gridpart/five.svg";
import image6 from "/assets/images/gridpart/six.svg";
import XSpacing from "../wrappers/XSpacing";

const GridPart = () => {
    const gridItems = [
        {
            id: 1,
            name: image1,
            title: "Local Search Strategy",
            description:
                "Optimize On-Page SEO Elements Higher Conversion Rate Builds Brand Credibility",
        },
        {
            id: 2,
            name: image2,
            title: "Amazon Advertising",
            description:
                "Improves Organic Ranking Boosts Sales Immediately Enhances PPC Campaigns & SEO",
        },
        {
            id: 3,
            name: image3,
            title: "Reputation Management",
            description:
                "Build higher trust Reputation increase profits Lower reputation risk",
        },
        {
            id: 4,
            name: image4,
            title: "Paid Search Advertising",
            description:
                "Reconnect Visitors Measure Ads Performance Targeted Ads In A Timely Manner",
        },
        {
            id: 5,
            name: image5,
            title: "Ebay Marketing SEO",
            description:
                "Use Valuable Keywords Optimize eBay listings Visibility on eBay & Rank #1",
        },
        {
            id: 6,
            name: image6,
            title: "Amazon EBC Creation",
            description:
                "Higher conversion rates Increase customer confidence Convey the complete information",
        },
    ];

    return (
        <XSpacing>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 ">
                {gridItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-start space-x-4 p-4 rounded-lg"
                    >

                        <div className="flex-shrink-0">
                            <img src={item.name} alt={item.title} className="w-16 h-16 object-contain" />
                        </div>


                        <div className="flex flex-col">
                            <h3 className="text-xl text-icm-black">
                                {item.title}
                            </h3>
                            <p className="text-lg text-icm-gray-light/70 mt-2">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </XSpacing>
    );
};

export default GridPart;
