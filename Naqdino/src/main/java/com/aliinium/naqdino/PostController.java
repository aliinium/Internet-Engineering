package com.aliinium.naqdino;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PostController {
    @GetMapping("post")
    public String post(){
        return "post";
    }
}
