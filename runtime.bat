@ECHO OFF

CD /D %~dp0

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::����ϵͳ����

SET "PATH=.\node_modules\.bin;%PATH%"
SET "PATH=%PATH%;D:\Software\PortableGit\bin"

::����Node����

IF EXIST D:\RunTime\node\runtime.bat (
    CALL D:\RunTime\node\runtime set "%~n0"
)

::����Python����

IF EXIST D:\RunTime\python3\runtime.bat (
    CALL D:\RunTime\python3\runtime set "%~n0"
)

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::��װ��������

CD /D %~dp0

IF NOT EXIST node_modules (
    IF EXIST ..\portal-subsite\node_modules (
        mklink /d node_modules ..\portal-subsite\node_modules
    ) ELSE (
        CMD /C "npm install"
    )
)

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CD /D %~dp0

IF "%1" == "" CMD /K
IF NOT "%1" == "" CMD /C "npm run %1"
