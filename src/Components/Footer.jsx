import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router';
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-base-200 border-t border-gray-500'>
            <footer className="footer sm:footer-horizontal text-base-content pt-10 pb-3 mb-3 max-w-[400px] mx-auto md:max-w-[1200px] md:mx-auto ">
                <div className='w-[300px]'>
                    <nav className='flex items-center gap-2'>
                        <img className='w-50' src={logo} alt="" />
                    </nav>
                    <p>Local Chef Bazaar brings you fresh, authentic, home-cooked meals prepared by passionate local chefs.</p>
                </div>
                <nav>
                    <h6 className="footer-title ">Services</h6>
                    <Link className="link link-hover ">Up Coming Events</Link>
                    <Link className="link link-hover "><h1>Create Event</h1></Link>
                    <Link className="link link-hover ">Manage Event</Link>
                </nav>
                <nav>
                    <h6 className="footer-title ">Contact</h6>
                    <Link className="link link-hover ">About us</Link>
                    <p>Email: <a className="link link-hover " href="#">support@localchefbazaar.com</a></p>
                    <p>Location: Rangpur, Bangladesh</p>
                </nav>
                <nav>
                    <h6 className="footer-title ">Legal</h6>
                    <a className="link link-hover ">Terms of use</a>
                    <a className="link link-hover ">Privacy policy</a>
                    <a className="link link-hover ">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title ">Social Link</h6>
                    <div className='flex items-center gap-3'>
                        <a className="link link-hover text-2xl "><FaFacebookSquare /></a>
                        <a className="link link-hover text-2xl "><FaSquareXTwitter /></a>
                        <a className="link link-hover text-2xl "><FaLinkedin /></a>
                    </div>
                </nav>
            </footer>
            <div className='text-center pt-3 mb-5 border-t border-gray-500'>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;