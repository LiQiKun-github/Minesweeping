package ai;


import com.sun.org.apache.xpath.internal.SourceTree;

import java.io.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@WebServlet("/solve")
public class SolveServlet extends javax.servlet.http.HttpServlet {

    public void init() throws ServletException{

    }



    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //super.doGet(req, resp);

        req.setCharacterEncoding("utf-8");
        resp.setContentType("text/html;charset=utf-8");
        resp.setCharacterEncoding("utf-8");

        int a;
        a = Integer.parseInt(req.getParameter("1"));
        String hangnum="6",lienum="6";
        System.out.print(a);
        if(16==a){
            hangnum="16";lienum="16";
        }
        else if(a==25){
                hangnum="25";lienum="25";
        }
        else{

        }
        req.getSession().setAttribute("hang",hangnum);
        req.getSession().setAttribute("lie",lienum);
        req.getSession().setAttribute("result",a);
        long start=System.currentTimeMillis();
        for(int i=0;i<1000;i++){
            for(int j=0;j<100;j++){
                for(int k=0;k<100;k++);
            }
        }
        long end=System.currentTimeMillis();
        req.getSession().setAttribute("elapse", (end-start)/1000.0);

        System.out.print("OK11!");
        //PrintWriter out = resp.getWriter();
        //out.println("<p>"+"hello"+"</p>");
        resp.sendRedirect("index.jsp");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //super.doPost(req, resp);
        doGet(req,resp);
    }
    public void destroy()
    {
        // 什么也不做
    }
}
