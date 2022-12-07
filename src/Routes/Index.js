import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from '../componants/Error'
import Home from '../componants/Home'
import AddBook from '../fetaures/books/AddBook'
import EditBook from '../fetaures/books/EditBook'
import ShowBooks from '../fetaures/books/ShowBooks'
import Footer from '../Layouts/Footer'
import Navbar from '../Layouts/Navbar'

const Index = () => {
    return <BrowserRouter>
        <Navbar />
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/showbooks" element={<ShowBooks />} />
                <Route path="/addbooks" element={<AddBook />} />
                <Route path="/editbook" element={<EditBook/>} />
                <Route path="*" element={<Error />} />
            </Routes>
        </main>
        <Footer/>
    </BrowserRouter>
}

export default Index

