function Turn_Right () {
    stop()
    iBIT.Spin(ibitSpin.Right, Trun_speed)
    basic.pause(300)
    stop()
}
function Convert_6_Analog2 () {
    Read_2_Analog()
    if (BL < Ref_BL) {
        BL = 0
    } else {
        BL = 1
    }
    if (BR < Ref_BR) {
        BR = 0
    } else {
        BR = 1
    }
}
function Tune_Moter (Motor_speed_: number) {
    if (Motor_speed_ <= 60) {
        left_speed = Motor_speed_ - 0
        Right_speed = Motor_speed_ - 0
    } else {
        left_speed = Motor_speed_ - 0
        Right_speed = Motor_speed_ - 0
    }
}
function stop () {
    iBIT.MotorStop()
    basic.pause(100)
}
input.onButtonPressed(Button.A, function () {
    Turn_Left()
})
function UTurn () {
    stop()
    iBIT.Spin(ibitSpin.Right, Trun_speed)
    basic.pause(550)
    stop()
}
function Convert_6_Analog () {
    Read_6_Analog()
    if (L3 < Ref_L3) {
        L3 = 0
    } else {
        L3 = 1
    }
    if (L2 < Ref_L2) {
        L2 = 0
    } else {
        L2 = 1
    }
    if (L1 < Ref_L1) {
        L1 = 0
    } else {
        L1 = 1
    }
    if (R1 < Ref_R1) {
        R1 = 0
    } else {
        R1 = 1
    }
    if (R2 < Ref_R2) {
        R2 = 0
    } else {
        R2 = 1
    }
    if (R3 < Ref_R3) {
        R3 = 0
    } else {
        R3 = 1
    }
}
function Read_2_Analog () {
    BL = iBIT.ReadADC(ibitReadADC.ADC0)
    BR = iBIT.ReadADC(ibitReadADC.ADC1)
}
function Turn_Left () {
    stop()
    iBIT.Spin(ibitSpin.Left, Trun_speed)
    basic.pause(300)
    stop()
}
function Read_6_Analog () {
    L3 = iBIT.ReadADC(ibitReadADC.ADC0)
    L2 = iBIT.ReadADC(ibitReadADC.ADC1)
    L1 = iBIT.ReadADC(ibitReadADC.ADC2)
    R1 = iBIT.ReadADC(ibitReadADC.ADC3)
    R2 = iBIT.ReadADC(ibitReadADC.ADC4)
    R3 = iBIT.ReadADC(ibitReadADC.ADC5)
}
input.onButtonPressed(Button.B, function () {
    Read_6_Analog()
    basic.showNumber(L3)
    basic.pause(5000)
    basic.showNumber(L2)
    basic.pause(5000)
    basic.showNumber(L1)
    basic.pause(5000)
    basic.showNumber(R1)
    basic.pause(5000)
    basic.showNumber(R2)
    basic.pause(5000)
    basic.showNumber(R3)
    basic.pause(5000)
    Read_2_Analog()
    basic.showNumber(BL)
    basic.pause(5000)
    basic.showNumber(BR)
    basic.pause(5000)
})
function forward (Motor_speed: number, Time: number) {
    Tune_Moter(Motor_speed)
    iBIT.Motor2(ibitMotor.Forward, left_speed, Right_speed)
    basic.pause(Time)
}
function Backward (Motor_speed: number, Time: number) {
    Tune_Moter(Motor_speed)
    iBIT.Motor2(ibitMotor.Backward, left_speed - 0, Right_speed - 0)
    basic.pause(Time)
}
let R3 = 0
let R2 = 0
let R1 = 0
let L1 = 0
let L2 = 0
let L3 = 0
let Right_speed = 0
let left_speed = 0
let BR = 0
let BL = 0
let Ref_BR = 0
let Ref_BL = 0
let Ref_R3 = 0
let Ref_R2 = 0
let Ref_R1 = 0
let Ref_L1 = 0
let Ref_L2 = 0
let Ref_L3 = 0
let Trun_speed = 0
let speed = 60
let Acc_speed = 100
let Slow_speed = 50
Trun_speed = 60
Ref_L3 = 2500
Ref_L2 = 2500
Ref_L1 = 2500
Ref_R1 = 2500
Ref_R2 = 2500
Ref_R3 = 2500
Ref_BL = 2500
Ref_BR = 2500
