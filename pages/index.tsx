import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
    // Move the alert outside JSX using useEffect
    useEffect(() => {
        alert("Thank you for visiting xoxo");
    }, []);

    return (
        <>
            <Head>
                <title>Elizabeth Mordi - Personal Blog</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className="container">
                <Image src="/your-photo.jpeg" alt="Elizabeth Mordi" width={150} height={150} className="profile-pic" />
                <h1>Elizabeth Mordi</h1>
                <p>Student at Ogwashi Ukwu Polytechnic | Leader | Fashion Enthusiast</p>

                <div className="blog-post">
                    <h2>Why I Love Leadership</h2>
                    <p>From a young age, I found joy in ensuring people around me felt supported and guided. Leadership is not about power, but about serving others...</p>
                </div>

                <div className="blog-post">
                    <h2>My Favorite Self-Enhancement Books</h2>
                    <p>Books have shaped my mindset and personal growth. I believe in continuous learning and self-improvement...</p>
                </div>

                <div className="blog-post">
                    <h2>Fashion & First Impressions</h2>
                    <p>"One is addressed how they are dressed." I live by this principle because appearance plays a key role in confidence and how we are perceived...</p>
                </div>
            </div>

            <footer>
                <p>&copy; 2025 Elizabeth Mordi | Personal Blog</p>
            </footer>

            <style jsx>{`
                .container {
                    max-width: 90%;
                    width: 800px;
                    margin: 40px auto;
                    background: white;
                    padding: 30px;
                    border-radius: 15px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                    text-align: center;
                }
                .profile-pic {
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    margin-top: 10px;
                    border: 4px solid #ff6f61;
                }
                h1 {
                    color: #ff6f61;
                }
                p {
                    color: #444;
                    line-height: 1.8;
                }
                .blog-post {
                    margin-top: 20px;
                    padding: 20px;
                    background: #fff5f5;
                    border-left: 5px solid #ff6f61;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }
                footer {
                    margin-top: 20px;
                    padding: 15px;
                    background: #ff6f61;
                    color: white;
                    border-radius: 0 0 10px 10px;
                }
                @media (max-width: 768px) {
                    .container {
                        width: 95%;
                        padding: 20px;
                    }
                    .profile-pic {
                        width: 120px;
                        height: 120px;
                    }
                    .blog-post {
                        padding: 15px;
                    }
                }
            `}</style>
        </>
    );
}
