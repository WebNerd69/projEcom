import teddy from './teddy.jpg'
import teddy2 from './teddy2.jpg'
import teddy3 from './teddy3.jpg'
import star from './star.png'
import dimStar from './dimStar.png'
export const images={
     teddy,teddy2,teddy3,star,dimStar
}
export const products=[
     {
          _id: 1,
          name: "Classic White Summer Dress",
          description: "Elegant white cotton dress perfect for summer days. Features a flattering A-line silhouette, delicate eyelet detailing, and adjustable straps. Made from breathable 100% cotton fabric that keeps you cool and comfortable all day long.",
          price: 29.99,
          image: [teddy,teddy2,teddy3,teddy],
          category: "Women",
          type: "Topwear",
          bestSeller: true,
          sizes: ["XS", "S", "M", "L", "XL"]
     },
     {
          _id: 2,
          name: "Men's Casual Denim Jacket",
          description: "Stylish denim jacket for casual outings. Made from premium quality denim with a vintage wash finish. Features multiple pockets, adjustable button cuffs, and classic collar design. Perfect for layering in any season.",
          price: 49.99,
          image: [teddy2,teddy,teddy3,teddy],
          category: "Men",
          type: "Winterwear",
          bestSeller: false,
          sizes: ["S", "M", "L", "XL", "XXL"]
     },
     {
          _id: 3,
          name: "Kids Floral Print Dress",
          description: "Cute floral pattern dress for little girls. Made with soft cotton blend fabric featuring cheerful blooms. Includes a matching belt, puff sleeves, and twirl-worthy skirt. Perfect for parties, special occasions, or everyday wear.",
          price: 19.99,
          image: [teddy3,teddy,teddy2,teddy],
          category: "Kids",
          type: "Topwear",
          bestSeller: true,
          sizes: ["2T", "3T", "4T", "5T", "6T"]
     },
     {
          _id: 4,
          name: "Women's High-Waist Jeans",
          description: "Comfortable stretch denim high-waist jeans with a perfect fit. Features a flattering high-rise design, subtle distressing, and premium stretch denim that holds its shape. Five-pocket styling and ankle-length cut make these jeans versatile for any outfit.",
          price: 34.99,
          image: [teddy,teddy3,teddy2,teddy],
          category: "Women",
          type: "Bottomwear",
          bestSeller: false,
          sizes: ["2", "4", "6", "8", "10", "12"]
     },
     {
          _id: 5,
          name: "Men's Formal Trousers",
          description: "Classic fit formal trousers for office wear. Crafted from premium wrinkle-resistant fabric with a subtle sheen. Features a comfortable waistband, crisp pleats, and straight-leg design. Perfect for professional settings and formal occasions.",
          price: 39.99,
          image: [teddy2,teddy,teddy3,teddy],
          category: "Men",
          type: "Bottomwear",
          bestSeller: true,
          sizes: ["30", "32", "34", "36", "38"]
     },
     {
          _id: 6,
          name: "Kids Winter Puffer Jacket",
          description: "Warm and cozy puffer jacket for children with water-resistant exterior. Features a soft fleece lining, detachable hood, and secure zip pockets. Designed with growing kids in mind, includes adjustable cuffs and reflective details for safety.",
          price: 32.99,
          image: [teddy3,teddy2,teddy,teddy],
          category: "Kids",
          type: "Winterwear",
          bestSeller: false,
          sizes: ["4", "5", "6", "7", "8"]
     },
     {
          _id: 7,
          name: "Women's Knit Sweater",
          description: "Soft knit sweater for chilly days, crafted from premium wool blend yarn. Features a relaxed fit, ribbed cuffs and hem, and subtle cable knit pattern. Perfect for layering and staying cozy during cold weather months.",
          price: 36.99,
          image: [teddy,teddy3,teddy2,teddy],
          category: "Women",
          type: "Winterwear",
          bestSeller: true,
          sizes: ["XS", "S", "M", "L", "XL"]
     },
     {
          _id: 8,
          name: "Men's Cotton T-Shirt",
          description: "Basic cotton crew neck t-shirt made from premium combed cotton. Features a classic fit, reinforced shoulder seams, and tagless collar for maximum comfort. Perfect for everyday wear with excellent durability and color retention.",
          price: 33.99,
          image: [teddy2,teddy,teddy3,teddy],
          category: "Men",
          type: "Topwear",
          bestSeller: false,
          sizes: ["S", "M", "L", "XL", "XXL"]
     },
     {
          _id: 9,
          name: "Kids Summer Shorts",
          description: "Comfortable cotton shorts for playtime with adjustable elastic waistband. Features durable stitching, deep pockets, and quick-dry fabric. Perfect for active kids who love outdoor activities and summer adventures.",
          price: 44.99,
          image: [teddy3,teddy2,teddy,teddy],
          category: "Kids",
          type: "Bottomwear",
          bestSeller: true,
          sizes: ["4", "5", "6", "7", "8"]
     },
     {
          _id: 10,
          name: "Women's Maxi Dress",
          description: "Flowing maxi dress with floral print in lightweight chiffon fabric. Features a flattering V-neckline, empire waist, and subtle side slits. Perfect for summer parties, beach vacations, or any special occasion requiring elegant comfort.",
          price: 37.99,
          image: [teddy,teddy3,teddy2,teddy],
          category: "Women",
          type: "Topwear",
          bestSeller: false,
          sizes: ["XS", "S", "M", "L", "XL"]
     },
     {
          _id: 11,
          name: "Men's Winter Coat",
          description: "Warm wool blend winter coat with sophisticated tailoring. Features a quilted lining, notched lapels, and double-breasted design. Includes deep interior pockets and wind-resistant cuffs for maximum protection against cold weather.",
          price: 54.99,
          image: [teddy2,teddy,teddy3,teddy],
          category: "Men",
          type: "Winterwear",
          bestSeller: true,
          sizes: ["S", "M", "L", "XL", "XXL"]
     },
     {
          _id: 12,
          name: "Kids Party Dress",
          description: "Fancy party dress with tulle skirt and delicate embellishments. Features a satin bodice, layered tulle skirt, and hidden zip closure. Perfect for birthdays, holidays, and special celebrations with comfortable lining and adjustable fit.",
          price: 41.99,
          image: [teddy3,teddy2,teddy,teddy],
          category: "Kids",
          type: "Topwear",
          bestSeller: false,
          sizes: ["2T", "3T", "4T", "5T", "6T"]
     },
     {
          _id: 13,
          name: "Women's Cargo Pants",
          description: "Trendy high-waist cargo pants with modern utility design. Features multiple functional pockets, adjustable ankle cuffs, and durable cotton twill fabric. Perfect for casual outings with a fashionable twist on classic cargo styling.",
          price: 45.99,
          image: [teddy,teddy3,teddy2,teddy],
          category: "Women",
          type: "Bottomwear",
          bestSeller: true,
          sizes: ["2", "4", "6", "8", "10", "12"]
     },
     {
          _id: 14,
          name: "Men's Polo Shirt",
          description: "Classic fit cotton polo shirt with premium pique knit fabric. Features reinforced buttons, ribbed collar and cuffs, and side vents for comfort. Perfect for casual business wear or weekend outings with lasting color and shape retention.",
          price: 39.99,
          image: [teddy2,teddy,teddy3,teddy],
          category: "Men",
          type: "Topwear",
          bestSeller: false,
          sizes: ["S", "M", "L", "XL", "XXL"]
     },
     {
          _id: 15,
          name: "Kids Winter Sweater",
          description: "Cute patterned winter sweater with fun holiday designs. Features soft acrylic blend yarn, ribbed trim, and easy-care fabric. Perfect for school days and winter activities with comfortable fit and warm construction.",
          price: 42.99,
          image: [teddy3,teddy2,teddy,teddy],
          category: "Kids",
          type: "Winterwear",
          bestSeller: true,
          sizes: ["4", "5", "6", "7", "8"]
     },
     {
          _id: 16,
          name: "Women's Denim Skirt",
          description: "A-line denim midi skirt with vintage-inspired design. Features front button closure, practical pockets, and slight stretch for comfort. Perfect for creating versatile casual outfits with classic denim style and modern fit.",
          price: 46.99,
          image: [teddy,teddy3,teddy2,teddy],
          category: "Women",
          type: "Bottomwear",
          bestSeller: false,
          sizes: ["2", "4", "6", "8", "10", "12"]
     },
     {
          _id: 17,
          name: "Men's Track Pants",
          description: "Comfortable athletic track pants with moisture-wicking technology. Features elastic waistband with drawstring, zip pockets, and tapered leg design. Perfect for workouts or casual wear with breathable, quick-dry fabric.",
          price: 43.99,
          image: [teddy2,teddy,teddy3,teddy],
          category: "Men",
          type: "Bottomwear",
          bestSeller: true,
          sizes: ["S", "M", "L", "XL", "XXL"]
     },
     {
          _id: 18,
          name: "Kids Denim Overalls",
          description: "Classic denim overalls for children with adjustable straps. Features multiple pockets, reinforced knees, and easy snap closures. Perfect for active play with durable construction and comfortable cotton denim blend.",
          price: 38.99,
          image: [teddy3,teddy2,teddy,teddy],
          category: "Kids",
          type: "Topwear",
          bestSeller: false,
          sizes: ["2T", "3T", "4T", "5T", "6T"]
     },
     {
          _id: 19,
          name: "Women's Winter Scarf",
          description: "Warm knitted winter scarf in soft premium acrylic blend. Features classic cable knit pattern, generous length, and fringed ends. Perfect for cold weather with versatile styling options and cozy warmth.",
          price: 40.99,
          image: [teddy,teddy3,teddy2,teddy],
          category: "Women",
          type: "Winterwear",
          bestSeller: true,
          sizes: ["One Size"]
     },
     {
          _id: 20,
          name: "Men's Dress Shirt",
          description: "Formal cotton dress shirt with wrinkle-resistant finish. Features spread collar, adjustable cuffs, and chest pocket. Perfect for professional settings with crisp appearance and comfortable fit throughout the day.",
          price: 47.99,
          image: [teddy2,teddy,teddy3,teddy],
          category: "Men",
          type: "Topwear",
          bestSeller: false,
          sizes: ["15", "15.5", "16", "16.5", "17"]
     },
     {
          _id: 21,
          name: "Women's Floral Sundress",
          description: "Light and breezy summer sundress with floral pattern. Features adjustable spaghetti straps, smocked back panel, and flowing skirt. Perfect for warm weather with breathable cotton fabric and feminine silhouette.",
          price: 35.99,
          image: [teddy3,teddy2,teddy,teddy],
          category: "Women",
          type: "Topwear",
          bestSeller: true,
          sizes: ["XS", "S", "M", "L", "XL"]
     },
     {
          _id: 22,
          name: "Men's Wool Sweater",
          description: "Warm wool blend sweater for winter with classic design. Features crew neckline, ribbed trim, and comfortable fit. Perfect for cold weather layering with durable construction and timeless style.",
          price: 52.99,
          image: [teddy,teddy3,teddy2,teddy],
          category: "Men",
          type: "Winterwear",
          bestSeller: false,
          sizes: ["S", "M", "L", "XL", "XXL"]
     },
     {
          _id: 23,
          name: "Kids School Uniform Dress",
          description: "Classic pleated school uniform dress in navy blue. Features peter pan collar, box pleats, and easy-care fabric. Perfect for school days with comfortable fit and traditional styling that meets most dress codes.",
          price: 28.99,
          image: [teddy2,teddy,teddy3,teddy],
          category: "Kids",
          type: "Topwear",
          bestSeller: true,
          sizes: ["4", "5", "6", "7", "8"]
     },
     {
          _id: 24,
          name: "Women's Leather Pants",
          description: "Stylish faux leather pants with modern skinny fit. Features stretch panels, ankle zips, and high-rise waist. Perfect for creating edgy looks with comfortable wear and sleek appearance.",
          price: 59.99,
          image: [teddy3,teddy2,teddy,teddy],
          category: "Women",
          type: "Bottomwear",
          bestSeller: false,
          sizes: ["2", "4", "6", "8", "10", "12"]
     },
     {
          _id: 25,
          name: "Men's Cargo Shorts",
          description: "Casual cargo shorts with multiple pockets for practical wear. Features belt loops, zip fly, and relaxed fit. Perfect for summer activities with durable cotton construction and classic cargo styling.",
          price: 32.99,
          image: [teddy,teddy3,teddy2,teddy],
          category: "Men",
          type: "Bottomwear",
          bestSeller: true,
          sizes: ["30", "32", "34", "36", "38"]
     },
     {
          _id: 26,
          name: "Kids Rain Jacket",
          description: "Waterproof rain jacket with hood and fun print design. Features sealed seams, reflective details, and easy zip closure. Perfect for rainy days with protective coverage and comfortable wear.",
          price: 34.99,
          image: [teddy2,teddy,teddy3,teddy],
          category: "Kids",
          type: "Winterwear",
          bestSeller: false,
          sizes: ["4", "5", "6", "7", "8"]
     },
     {
          _id: 27,
          name: "Women's Turtleneck Sweater",
          description: "Cozy turtleneck sweater for winter in soft knit fabric. Features ribbed texture, dropped shoulders, and relaxed fit. Perfect for cold weather with warm construction and versatile styling options.",
          price: 45.99,
          image: [teddy3,teddy2,teddy,teddy],
          category: "Women",
          type: "Winterwear",
          bestSeller: true,
          sizes: ["XS", "S", "M", "L", "XL"]
     },
     {
          _id: 28,
          name: "Men's Hoodie",
          description: "Comfortable cotton blend hoodie with kangaroo pocket. Features adjustable drawstring hood, ribbed cuffs, and soft fleece lining. Perfect for casual wear with classic design and cozy comfort.",
          price: 38.99,
          image: [teddy,teddy3,teddy2,teddy],
          category: "Men",
          type: "Winterwear",
          bestSeller: false,
          sizes: ["S", "M", "L", "XL", "XXL"]
     },
     {
          _id: 29,
          name: "Kids Jumpsuit",
          description: "Casual denim jumpsuit for children with easy wear design. Features adjustable straps, elastic waist, and snap closures. Perfect for playtime with comfortable fit and durable construction.",
          price: 36.99,
          image: [teddy2,teddy,teddy3,teddy],
          category: "Kids",
          type: "Topwear",
          bestSeller: true,
          sizes: ["2T", "3T", "4T", "5T", "6T"]
     },
     {
          _id: 30,
          name: "Women's Winter Boots",
          description: "Warm and stylish winter boots with faux fur lining. Features water-resistant exterior, non-slip sole, and side zipper. Perfect for cold weather with comfortable fit and fashionable design.",
          price: 64.99,
          image: [teddy3,teddy2,teddy,teddy],
          category: "Women",
          type: "Winterwear",
          bestSeller: false,
          sizes: ["5", "6", "7", "8", "9", "10"]
     }
]