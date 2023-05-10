package cn.huanzi.qch.baseadmin.aibox.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/")
public class AIBoxClientController {

    @GetMapping("client")
    public ModelAndView client() {

        return new ModelAndView("client", "client", null);
    }
}
