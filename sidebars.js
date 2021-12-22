/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: 'category',
      label: '前言',
	  items: ['README', 'preface_guowenzhe', 'preface', 'preface_labview'],
    },
	{
      type: 'category',
      label: '正文',
	  items: [
	    {
          type: 'category',
		  label: 'LabVIEW 入门',
          link: {
            type: 'doc',
            id: 'ramp_up',
          },
          items: [ 
		    'ramp_up_install', 
			'ramp_up_hello_world', 
			'ramp_up_how_to_learn', 
			'ramp_up_complex_vis',
			'ramp_up_dev_environment',
		  ],
        },
        {
          type: 'category',
		  label: '数据',
          link: {
            type: 'doc',
            id: 'data',
          },
          items: [ 
		    'data_number', 
			'data_other_datatypes', 
			'data_datatype_cast', 
			'data_and_controls',
			'data_use_cases',
		  ],
        },
        {
          type: 'category',
		  label: '基本程序结构',
          link: {
            type: 'doc',
            id: 'structure',
          },
          items: [ 
		    'structure_sequence', 
			'structure_condition', 
			'structure_disable', 
			'structure_loop',
			'structure_event',
			'structure_timing',
		  ],
        },
		{
          type: 'category',
		  label: '常用程序结构模式',
          link: {
            type: 'doc',
            id: 'pattern',
          },
          items: [ 
		    'pattern_error_handling', 
			'pattern_reentrant_vi', 
			'pattern_state_machine', 
			'pattern_global_data',
			'pattern_ui',
			'pattern_polymorphic_vi',
			'pattern_pass_by_ref',
		  ],
        },
		{
          type: 'category',
		  label: '调用外部程序',
          link: {
            type: 'doc',
            id: 'external_call',
          },
          items: [ 
		    'external_call_dll', 
			'external_call_activex', 
			'external_call_dotnet', 
		  ],
        },
		{
          type: 'category',
		  label: 'VI 服务器',
          link: {
            type: 'doc',
            id: 'vi_server',
          },
          items: [ 
		    'vi_server_for_ui', 
			'vi_server_for_subvi', 
			'vi_server_for_vi', 
			'vi_server_for_net',
		  ],
        },
		{
          type: 'category',
		  label: '测试测量应用程序设计',
          link: {
            type: 'doc',
            id: 'measurement',
          },
          items: [ 
		    'measurement_r_p_d', 
			'measurement_express_vi', 
			'measurement_daq', 
			'measurement_display',
			'measurement_storage',
		  ],
        },
		{
          type: 'category',
		  label: '调试',
          link: {
            type: 'doc',
            id: 'debug',
          },
          items: [ 
		    'debug_ide', 
			'debug_probe', 
			'debug_more_tools', 
			'debug_errors',
			'debug_performance',
			'debug_dll',
		  ],
        },
		{
          type: 'category',
		  label: '管理 LabVIEW 项目',
          link: {
            type: 'doc',
            id: 'manage',
          },
          items: [ 
		    'manage_project', 
			'manage_library', 
			'manage_release', 
		  ],
        },
		{
          type: 'category',
		  label: '界面设计',
          link: {
            type: 'doc',
            id: 'ui',
          },
          items: [ 
		    'ui_principle', 
			'ui_standard', 
			'ui_cases', 
			'ui_modulization',
			'ui_xcontrol',
		  ],
        },
		{
          type: 'category',
		  label: '代码风格与优化',
          link: {
            type: 'doc',
            id: 'optimization',
          },
          items: [ 
		    'optimization_mechanism', 
			'optimization_memory', 
			'optimization_multi_thread', 
			'optimization_coding_style',
			'optimization_inline_subvi',
		  ],
        },
		{
          type: 'category',
		  label: '面向对象编程',
          link: {
            type: 'doc',
            id: 'oop',
          },
          items: [ 
		    'oop_basic', 
			'oop_class', 
			'oop_class_pro_con', 
			'oop_interface',
			'oop_use_cases',
		  ],
        },
	  ],
    },
	{
      type: 'category',
      label: '附录',
	  items: ['reference', 'epilogue'],
    },
  ],

};

module.exports = sidebars;
